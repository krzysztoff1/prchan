import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Custom Europe Tour Quote",
  description:
    "Contact Prchan Tourism for custom European tour quotes. Reach our Krakow-based team for MICE, FIT, and leisure group travel planning. Email: info@prchan-tourism.com",
  keywords: [
    "contact Prchan Tourism",
    "European tour quote",
    "Poland travel inquiry",
    "DMC contact",
    "Krakow tour operator contact",
    "custom tour request",
  ],
  openGraph: {
    title: "Contact Prchan Tourism - Get Your Custom Tour Quote",
    description:
      "Plan your perfect European trip. Contact our Krakow team for personalized MICE, FIT, and leisure tour quotes.",
    url: "https://prchan-tourism.com/contact",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Prchan Tourism",
      },
    ],
  },
  twitter: {
    title: "Contact Prchan Tourism - Custom Tour Quotes",
    description:
      "Plan your European trip. Contact our Krakow team for personalized tour quotes.",
    images: ["/images/hero-bg.jpeg"],
  },
  alternates: {
    canonical: "https://prchan-tourism.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
