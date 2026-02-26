import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the TnaDown team. We're here to help with any questions about our Tnaflix video downloader.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Contact Us</h1>
      <p className="mt-4 text-lg text-muted">
        Have a question, suggestion, or issue? We&apos;d love to hear from you.
      </p>

      <div className="mt-10 space-y-8">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-sm text-muted">
            For general inquiries, technical support, or feedback, please reach
            out to us via email:
          </p>
          <p className="mt-4">
            <a
              href="mailto:support@tnaflixdownloader.site"
              className="text-primary hover:underline"
            >
              support@tnaflixdownloader.site
            </a>
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">Legal Notice</h2>
          <div className="mt-2 space-y-3 text-sm text-muted">
            <p>
              {SITE_NAME} is an independent online tool and is not affiliated
              with, endorsed by, or connected to Tnaflix or any of its
              subsidiaries.
            </p>
            <p>
              This service is provided for personal and educational use only. Users
              are solely responsible for ensuring that their use of this tool
              complies with applicable laws and the terms of service of content
              providers.
            </p>
            <p>
              We do not host, store, or distribute any video content. All video
              files are downloaded directly from their original source.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold">DMCA / Copyright</h2>
          <p className="mt-2 text-sm text-muted">
            If you believe that content accessible through our service infringes
            your copyright, please contact us at{" "}
            <a
              href="mailto:support@tnaflixdownloader.site"
              className="text-primary hover:underline"
            >
              support@tnaflixdownloader.site
            </a>{" "}
            with the relevant details and we will respond promptly.
          </p>
        </div>
      </div>
    </div>
  );
}
