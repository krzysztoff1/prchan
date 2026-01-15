import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import StructuredData from "@/components/StructuredData";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prchan-tourism.com"),
  title: {
    default: "Prchan Tourism - Poland DMC | European Tours & Travel",
    template: "%s | Prchan Tourism",
  },
  description:
    "Poland-based Destination Management Company with 25+ years of experience. We specialize in Leisure Groups, MICE, and FIT tours across Europe. Book your memorable European journey today.",
  keywords: [
    "DMC Poland",
    "Destination Management Company",
    "European tours",
    "Poland travel",
    "MICE tours Europe",
    "FIT tours",
    "Krakow DMC",
    "European travel agency",
    "Poland tour operator",
    "incoming tours Europe",
  ],
  authors: [{ name: "Prchan Tourism sp. z o.o." }],
  creator: "Prchan Tourism",
  publisher: "Prchan Tourism sp. z o.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prchan-tourism.com",
    siteName: "Prchan Tourism",
    title: "Prchan Tourism - Poland DMC | European Tours & Travel",
    description:
      "Poland-based Destination Management Company with 25+ years of experience. Specializing in Leisure Groups, MICE, and FIT tours across Europe.",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Prchan Tourism - European Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prchan Tourism - Poland DMC | European Tours",
    description:
      "Poland-based DMC with 25+ years experience. Leisure Groups, MICE & FIT tours across Europe.",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://prchan-tourism.com",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${lato.variable} font-sans antialiased`}>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
