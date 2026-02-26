"use client";

import { useState } from "react";

interface VideoFormat {
  url: string;
  format: string;
  quality: string;
  size?: string;
}

interface ExtractResult {
  title: string;
  thumbnail?: string;
  duration?: string;
  formats: VideoFormat[];
}

export default function DownloadForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ExtractResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url.trim()) {
      setError("Please paste a valid Tnaflix video URL.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to extract video. Please check the URL and try again.");
        return;
      }
      setResult(data);
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          <span className="text-primary">Tnaflix Downloader</span> Online
        </h1>
        <p className="mt-4 text-lg text-muted">
          Download Tnaflix videos in MP4, WEBM, or MP3 for free. 100% anonymous — we never log your activity.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Tnaflix video URL here..."
            className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Video URL"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
          >
            {loading ? "Processing..." : "Download Video Now"}
          </button>
        </form>

        {/* Trust badges near CTA */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            No Malware
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.72 11.72 0 013.168-4.477M6.343 6.343A9.972 9.972 0 0112 5c5 0 9.27 3.11 11 7.5a11.7 11.7 0 01-4.373 5.157M6.343 6.343L17.657 17.657M6.343 6.343L3 3m14.657 14.657L21 21" />
            </svg>
            100% Anonymous
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Zero Logs
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Last tested: {today}
          </span>
        </div>

        {error && (
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-left text-sm">
            <p className="text-red-400" role="alert">{error}</p>
            <div className="mt-2 text-xs text-muted">
              <p className="font-medium text-foreground">Troubleshooting:</p>
              <ul className="mt-1 list-inside list-disc space-y-0.5">
                <li>Make sure you copied the full video URL, not just the homepage</li>
                <li>Try refreshing the page and pasting again</li>
                <li>The video may have been removed or made private</li>
                <li>Try a different browser or disable your ad blocker</li>
              </ul>
            </div>
          </div>
        )}

        {result && (
          <div className="mt-8 rounded-xl border border-border bg-surface p-6 text-left">
            <h2 className="text-lg font-semibold">{result.title}</h2>
            {result.duration && (
              <p className="mt-1 text-sm text-muted">Duration: {result.duration}</p>
            )}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted">
                    <th className="py-2 text-left font-medium">Format</th>
                    <th className="py-2 text-left font-medium">Quality</th>
                    <th className="py-2 text-left font-medium">Size</th>
                    <th className="py-2 text-right font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {result.formats.map((f, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 uppercase">{f.format}</td>
                      <td className="py-3">{f.quality}</td>
                      <td className="py-3 text-muted">{f.size || "—"}</td>
                      <td className="py-3 text-right">
                        <a
                          href={f.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-md bg-success px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
