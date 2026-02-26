import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="text-lg font-bold text-primary">
              {SITE_NAME}
            </Link>
            <p className="mt-1 text-sm text-muted">
              Free online Tnaflix video downloader.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-2">
            This tool is provided for personal use only. Please respect copyright laws and the terms of service of content providers.
          </p>
        </div>
      </div>
    </footer>
  );
}
