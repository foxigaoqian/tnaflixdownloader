import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Download Tnaflix Videos - Step by Step Tutorial",
  description:
    "Learn how to download Tnaflix videos in MP4, WEBM, or MP3 format with our easy step-by-step guide. Works on desktop and mobile.",
  alternates: { canonical: "/tutorial" },
};

export default function TutorialPage() {
  const steps = [
    {
      number: "1",
      title: "Find the Video on Tnaflix",
      description:
        "Open Tnaflix in your browser and navigate to the video you want to download. Once you've found it, copy the full URL from your browser's address bar. The URL typically looks like: https://www.tnaflix.com/...",
    },
    {
      number: "2",
      title: "Paste the URL into Tnaflix Downloader",
      description:
        'Go to our homepage and paste the copied URL into the input field. Click the "Extract & Download" button. Our system will analyze the video page and extract all available download options.',
    },
    {
      number: "3",
      title: "Choose Your Format and Quality",
      description:
        "After extraction, you'll see a list of available formats (MP4, WEBM, MP3) and quality options (480p, 720p, 1080p). Choose the one that best suits your needs.",
    },
    {
      number: "4",
      title: "Download and Save",
      description:
        'Click the "Download" button next to your chosen format. The video will start downloading to your device. On mobile, the file will be saved to your Downloads folder.',
    },
  ];

  const tips = [
    "Make sure you copy the full video URL, not just the homepage link.",
    "For the best quality, choose 1080p MP4 when available.",
    "If a format doesn't work, try a different quality or format option.",
    "On iPhone, use Safari for the best download experience.",
    "On Android, downloads will appear in your notification bar.",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">
        How to Download <span className="text-primary">Tnaflix Videos</span>
      </h1>
      <p className="mt-4 text-lg text-muted">
        Follow this simple guide to download any Tnaflix video to your device.
      </p>

      {/* Steps */}
      <div className="mt-12 space-y-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-4 rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              {step.number}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-12 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold">Tips for Best Results</h2>
        <ul className="mt-4 space-y-2">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-0.5 text-primary">&#10003;</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Compatibility */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Device Compatibility</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { device: "Desktop", detail: "Windows, macOS, Linux — any modern browser" },
            { device: "Android", detail: "Chrome, Firefox, or any mobile browser" },
            { device: "iPhone / iPad", detail: "Safari recommended for direct downloads" },
          ].map((item) => (
            <div
              key={item.device}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <h3 className="font-semibold">{item.device}</h3>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
