export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Prchan Tourism sp. z o.o.",
    alternateName: "Prchan Tourism",
    url: "https://prchan-tourism.com",
    logo: "https://prchan-tourism.com/images/logo.png",
    description:
      "Poland-based Destination Management Company with 25+ years of experience in organizing Leisure Groups, MICE, and FIT tours across Europe.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@prchan-tourism.com",
      availableLanguage: ["English", "Polish"],
    },
    sameAs: [],
    areaServed: [
      {
        "@type": "Country",
        name: "Poland",
      },
      {
        "@type": "Country",
        name: "Czech Republic",
      },
      {
        "@type": "Country",
        name: "Switzerland",
      },
      {
        "@type": "Country",
        name: "Austria",
      },
      {
        "@type": "Country",
        name: "Germany",
      },
      {
        "@type": "Country",
        name: "Netherlands",
      },
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "Country",
        name: "Hungary",
      },
      {
        "@type": "Country",
        name: "Slovakia",
      },
      {
        "@type": "Country",
        name: "Spain",
      },
    ],
    serviceType: [
      "Destination Management",
      "MICE Tours",
      "FIT Tours",
      "Leisure Group Tours",
      "European Travel Planning",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prchan Tourism",
    url: "https://prchan-tourism.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://prchan-tourism.com/destinations?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
    </>
  );
}
