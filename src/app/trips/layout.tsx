import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poland Tour Itineraries - Kraków, Warsaw, Gdańsk & More",
  description:
    "Explore curated Poland tour itineraries from Prchan Tourism. Multi-day trips to Kraków, Warsaw, Gdańsk, Zakopane, Wieliczka, Wrocław, and Berlin with customized pricing.",
  keywords: [
    "Poland itineraries",
    "Kraków tours",
    "Warsaw trips",
    "Gdańsk travel",
    "Zakopane tours",
    "Wieliczka Salt Mine",
    "Wrocław tours",
    "Poland vacation packages",
    "multi-day Poland tours",
  ],
  openGraph: {
    title: "Poland Tour Itineraries - Prchan Tourism",
    description:
      "Curated multi-day tours to Kraków, Warsaw, Gdańsk, Zakopane & more. Custom Poland trip packages with experienced local guides.",
    url: "https://prchan-tourism.com/trips",
    images: [
      {
        url: "/images/zakopane.jpg",
        width: 1200,
        height: 630,
        alt: "Poland Tour Itineraries - Prchan Tourism",
      },
    ],
  },
  twitter: {
    title: "Poland Tour Itineraries - Prchan Tourism",
    description:
      "Multi-day tours to Kraków, Warsaw, Gdańsk, Zakopane & more. Custom Poland trip packages.",
    images: ["/images/zakopane.jpg"],
  },
  alternates: {
    canonical: "https://prchan-tourism.com/trips",
  },
};

export default function TripsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
