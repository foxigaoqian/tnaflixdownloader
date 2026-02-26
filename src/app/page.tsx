import DownloadForm from "@/components/DownloadForm";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import TrustSignals from "@/components/TrustSignals";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <DownloadForm />
      <Steps />
      <Features />
      <TrustSignals />
      <Reviews />
      <FAQ />

      {/* Legal disclaimer */}
      <section className="border-t border-border py-10">
        <div className="mx-auto max-w-3xl px-4 text-center text-xs text-muted">
          <p>
            <strong className="text-foreground">Disclaimer:</strong> Tnaflix
            Downloader is an independent tool and is not affiliated with Tnaflix.
            This service is intended for personal use only. Please ensure you
            have the right to download any content and respect the copyright
            laws in your jurisdiction. We do not host or store any video files
            on our servers.
          </p>
        </div>
      </section>
    </>
  );
}
