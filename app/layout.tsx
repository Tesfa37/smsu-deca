import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMSU DECA | Southwest Minnesota State University",
  description:
    "Southwest Minnesota State University's chapter of DECA - preparing emerging leaders and entrepreneurs in marketing, finance, hospitality, and management. Join us to compete, network, and develop professional skills.",
  keywords: [
    "SMSU DECA",
    "Southwest Minnesota State University",
    "DECA",
    "business competition",
    "marketing students",
    "entrepreneurship",
    "leadership development",
  ],
  authors: [{ name: "SMSU DECA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smsu-deca.org",
    siteName: "SMSU DECA",
    title: "SMSU DECA | Southwest Minnesota State University",
    description:
      "Southwest Minnesota State University's chapter of DECA - preparing emerging leaders and entrepreneurs in business.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMSU DECA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMSU DECA | Southwest Minnesota State University",
    description:
      "Southwest Minnesota State University's chapter of DECA - preparing emerging leaders and entrepreneurs in business.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body 
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16 md:pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


