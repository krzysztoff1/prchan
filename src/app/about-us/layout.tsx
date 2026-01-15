import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Poland DMC & European Tour Operator",
  description:
    "Learn about Prchan Tourism, a Krakow-based Destination Management Company with 25+ years of experience in organizing MICE, FIT, and leisure group tours across Europe.",
  keywords: [
    "about Prchan Tourism",
    "Poland DMC",
    "Krakow tour operator",
    "European travel company",
    "MICE tours",
    "FIT tours Europe",
  ],
  openGraph: {
    title: "About Prchan Tourism - Poland DMC",
    description:
      "Krakow-based DMC with 25+ years experience organizing memorable European tours for MICE, FIT, and leisure groups.",
    url: "https://prchan-tourism.com/about-us",
    images: [
      {
        url: "/images/warsaw-square.jpg",
        width: 1200,
        height: 630,
        alt: "Warsaw Old Town Square - Prchan Tourism",
      },
    ],
  },
  twitter: {
    title: "About Prchan Tourism - Poland DMC",
    description:
      "Krakow-based DMC with 25+ years experience. MICE, FIT & leisure group tours across Europe.",
    images: ["/images/warsaw-square.jpg"],
  },
  alternates: {
    canonical: "https://prchan-tourism.com/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
