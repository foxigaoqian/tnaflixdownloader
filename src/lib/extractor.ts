export interface VideoFormat {
  url: string;
  format: string;
  quality: string;
  size?: string;
}

export interface ExtractResult {
  title: string;
  thumbnail?: string;
  duration?: string;
  formats: VideoFormat[];
}

export async function extractVideo(videoUrl: string): Promise<ExtractResult> {
  const res = await fetch(videoUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the video page.");
  }

  const html = await res.text();

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch
    ? titleMatch[1].replace(/\s*[-|].*$/, "").trim()
    : "Tnaflix Video";

  // Extract duration
  const durationMatch =
    html.match(/"duration"\s*:\s*"([^"]+)"/i) ||
    html.match(/duration['"]\s*:\s*['"]([^'"]+)['"]/i);
  const duration = durationMatch ? durationMatch[1] : undefined;

  const formats: VideoFormat[] = [];

  // Strategy 1: Extract from the main <video> block only
  // Find the primary video player section and extract its <source> tags
  const videoBlockMatch = html.match(/<video[^>]*>([\s\S]*?)<\/video>/i);
  if (videoBlockMatch) {
    const videoBlock = videoBlockMatch[0];
    const sourceRegex =
      /<source[^>]+src=["']([^"']+)["'][^>]*(?:type=["']([^"']+)["'])?[^>]*(?:label=["']([^"']+)["'])?[^>]*>/gi;
    let match;
    while ((match = sourceRegex.exec(videoBlock)) !== null) {
      const url = match[1];
      const type = match[2] || "";
      const label = match[3] || "";
      if (
        url &&
        (url.includes(".mp4") || url.includes(".webm") || type.includes("video"))
      ) {
        const format = url.includes(".webm") ? "webm" : "mp4";
        const quality = label || inferQuality(url);
        formats.push({ url, format, quality });
      }
    }
  }

  // Strategy 2: TNAFlix-specific JS variables for the main video
  const tnaflixPatterns = [
    /video_url\s*[:=]\s*["']([^"']+\.(?:mp4|webm)[^"']*)/gi,
    /html5player\.setVideoUrl\s*\(\s*["']([^"']+)/gi,
    /setVideoHLS\s*\(\s*["']([^"']+)/gi,
    /(?:videoFile|video_file|mediaFile|media_file)\s*[:=]\s*["']([^"']+\.(?:mp4|webm)[^"']*)/gi,
  ];

  let match;
  for (const pattern of tnaflixPatterns) {
    while ((match = pattern.exec(html)) !== null) {
      const url = match[1];
      if (url && !formats.some((f) => f.url === url)) {
        const format = url.includes(".webm") ? "webm" : "mp4";
        formats.push({ url, format, quality: inferQuality(url) });
      }
    }
  }

  // Strategy 3: JSON-LD contentUrl (usually the main video only)
  const contentUrlRegex = /["']contentUrl["']\s*:\s*["']([^"']+)/gi;
  while ((match = contentUrlRegex.exec(html)) !== null) {
    const url = match[1];
    if (url && !formats.some((f) => f.url === url)) {
      const format = url.includes(".webm") ? "webm" : "mp4";
      formats.push({ url, format, quality: inferQuality(url) });
    }
  }

  if (formats.length === 0) {
    throw new Error(
      "No downloadable video found. The URL may be invalid or the video is not available."
    );
  }

  // Deduplicate by URL
  const seen = new Set<string>();
  const uniqueFormats = formats.filter((f) => {
    if (seen.has(f.url)) return false;
    seen.add(f.url);
    return true;
  });

  return {
    title,
    duration,
    formats: uniqueFormats,
  };
}

function inferQuality(url: string): string {
  if (/1080/i.test(url)) return "1080p";
  if (/720/i.test(url)) return "720p";
  if (/480/i.test(url)) return "480p";
  if (/360/i.test(url)) return "360p";
  if (/240/i.test(url)) return "240p";
  return "Default";
}
