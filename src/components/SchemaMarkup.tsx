import { SITE_URL, SITE_NAME, FAQ_DATA, REVIEWS_DATA } from "@/lib/constants";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Free online Tnaflix video downloader tool.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?url={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const totalRating =
    REVIEWS_DATA.reduce((sum, r) => sum + r.rating, 0) / REVIEWS_DATA.length;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tnaflix Downloader",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: totalRating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: REVIEWS_DATA.length.toString(),
    },
    review: REVIEWS_DATA.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download Tnaflix Videos",
    description:
      "A simple guide to download videos from Tnaflix using our free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Copy the video URL",
        text: "Go to Tnaflix, find the video you want to download, and copy the URL from your browser's address bar.",
      },
      {
        "@type": "HowToStep",
        name: "Paste the URL",
        text: "Paste the copied URL into the input field on our website and click the Extract button.",
      },
      {
        "@type": "HowToStep",
        name: "Download the video",
        text: "Choose your preferred format and quality, then click the Download button to save the video.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
