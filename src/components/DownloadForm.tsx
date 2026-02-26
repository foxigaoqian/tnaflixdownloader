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

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          <span className="text-primary">Tnaflix Downloader</span> Online
        </h1>
        <p className="mt-4 text-lg text-muted">
          Download Tnaflix videos in MP4, WEBM, or MP3 for free. Just paste the link below.
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
            {loading ? "Extracting..." : "Extract & Download"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-red-400" role="alert">{error}</p>
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
