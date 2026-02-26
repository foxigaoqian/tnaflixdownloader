import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${SITE_NAME}. Read our terms and conditions for using the Tnaflix video downloader service.`,
  alternates: { canonical: "/terms-of-use" },
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: February 2025</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing and using {SITE_NAME} ({SITE_URL}), you agree to be
            bound by these Terms of Use. If you do not agree with any part of
            these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. Description of Service
          </h2>
          <p className="mt-2">
            {SITE_NAME} provides a free online tool that allows users to
            download videos from Tnaflix for personal use. We do not host, store,
            or distribute any video content on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. User Responsibilities
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              You are solely responsible for ensuring that your use of this
              service complies with all applicable laws in your jurisdiction.
            </li>
            <li>
              You agree not to use this service to download copyrighted content
              without proper authorization from the content owner.
            </li>
            <li>
              You agree not to use this service for any commercial purpose
              without prior written consent.
            </li>
            <li>
              You agree not to attempt to disrupt, overload, or interfere with
              the proper functioning of the service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Intellectual Property
          </h2>
          <p className="mt-2">
            All content on this website, including text, graphics, logos, and
            software, is the property of {SITE_NAME} and is protected by
            applicable intellectual property laws. Videos downloaded through our
            service remain the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Disclaimer of Warranties
          </h2>
          <p className="mt-2">
            This service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without any warranties of any kind, either express
            or implied. We do not guarantee that the service will be
            uninterrupted, error-free, or that any specific video will be
            available for download.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Limitation of Liability
          </h2>
          <p className="mt-2">
            In no event shall {SITE_NAME} be liable for any indirect,
            incidental, special, or consequential damages arising out of or in
            connection with the use of this service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            7. Changes to Terms
          </h2>
          <p className="mt-2">
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting on this page. Your continued
            use of the service constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            8. Contact
          </h2>
          <p className="mt-2">
            If you have any questions about these Terms of Use, please contact
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
