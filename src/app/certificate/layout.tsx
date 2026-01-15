import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Operator Certificate - Licensed & Registered DMC",
  description:
    "View Prchan Tourism's official tour operator certificates. Registered in Poland's Central Registry of Tour Operators. Licensed destination management company.",
  keywords: [
    "tour operator certificate",
    "licensed DMC Poland",
    "registered tour operator",
    "Poland tourism license",
    "certified travel agency",
  ],
  openGraph: {
    title: "Tour Operator Certificate - Prchan Tourism",
    description:
      "Official tour operator certificates. Registered in Poland's Central Registry of Tour Operators.",
    url: "https://prchan-tourism.com/certificate",
    images: [
      {
        url: "/images/certificate-1.png",
        width: 600,
        height: 800,
        alt: "Prchan Tourism Tour Operator Certificate",
      },
    ],
  },
  twitter: {
    title: "Tour Operator Certificate - Prchan Tourism",
    description:
      "Official certificates. Registered in Poland's Central Registry of Tour Operators.",
    images: ["/images/certificate-1.png"],
  },
  alternates: {
    canonical: "https://prchan-tourism.com/certificate",
  },
};

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
