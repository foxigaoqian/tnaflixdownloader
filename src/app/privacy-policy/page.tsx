import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we handle your data when using our Tnaflix video downloader.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: February 2025</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            1. Introduction
          </h2>
          <p className="mt-2">
            {SITE_NAME} ({SITE_URL}) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you use our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. Information We Collect
          </h2>
          <p className="mt-2">
            We collect minimal information to provide our service:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">URLs submitted:</strong> We
              process the video URLs you submit to extract download links. These
              URLs are not stored after processing.
            </li>
            <li>
              <strong className="text-foreground">Usage data:</strong> We may
              collect anonymous usage statistics such as page views and feature
              usage to improve our service.
            </li>
            <li>
              <strong className="text-foreground">Cookies:</strong> We may use
              essential cookies to ensure the proper functioning of the website.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. What We Do NOT Collect
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>We do not collect personal identification information.</li>
            <li>We do not require registration or account creation.</li>
            <li>We do not store downloaded video files on our servers.</li>
            <li>We do not track your browsing activity across other websites.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. How We Use Information
          </h2>
          <p className="mt-2">Any information collected is used solely to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Provide and maintain the video download service.</li>
            <li>Improve user experience and website performance.</li>
            <li>Monitor and prevent abuse of the service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Third-Party Services
          </h2>
          <p className="mt-2">
            Our website may use third-party services such as analytics providers
            and content delivery networks (CDN). These services may collect
            anonymous data in accordance with their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Data Security
          </h2>
          <p className="mt-2">
            We use HTTPS encryption to protect data transmitted between your
            browser and our servers. We implement reasonable security measures to
            protect against unauthorized access or data breaches.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            7. Children&apos;s Privacy
          </h2>
          <p className="mt-2">
            Our service is not intended for use by individuals under the age of
            18. We do not knowingly collect information from minors.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            8. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            9. Contact Us
          </h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:support@tnaflixdownloader.site"
              className="text-primary hover:underline"
            >
              support@tnaflixdownloader.site
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
