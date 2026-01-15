import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European Destinations - Poland, Czech Republic, Switzerland & More",
  description:
    "Explore top European destinations with Prchan Tourism. Discover Poland, Czech Republic, Switzerland, Austria, Germany, Netherlands, France, Hungary, Slovakia, and Spain.",
  keywords: [
    "European destinations",
    "Poland tours",
    "Czech Republic travel",
    "Switzerland tours",
    "Austria travel",
    "Germany tours",
    "Netherlands travel",
    "France tours",
    "Hungary travel",
    "Slovakia tours",
    "Spain travel",
    "European vacation",
  ],
  openGraph: {
    title: "European Destinations - Prchan Tourism",
    description:
      "Discover top European destinations: Poland, Czech Republic, Switzerland, Austria, and more. Custom tours designed for your perfect vacation.",
    url: "https://prchan-tourism.com/destinations",
    images: [
      {
        url: "/images/destinations-hero.jpg",
        width: 1200,
        height: 630,
        alt: "European Destinations - Prchan Tourism",
      },
    ],
  },
  twitter: {
    title: "European Destinations - Prchan Tourism",
    description:
      "Explore Poland, Czech Republic, Switzerland, Austria & more with custom European tours.",
    images: ["/images/destinations-hero.jpg"],
  },
  alternates: {
    canonical: "https://prchan-tourism.com/destinations",
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
