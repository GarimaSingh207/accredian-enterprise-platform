import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { AdvancedEffects } from "@/components/ui/AdvancedEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Corporate Training & Upskilling Solutions",
  description:
    "Cultivate high-performance enterprise teams with Accredian's tailored corporate training programs. Trusted by Reliance, IBM, HCL, ADP, Bayer, and more.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "upskilling",
    "L&D",
    "product management training",
    "Gen-AI training",
  ],
  openGraph: {
    title: "Accredian Enterprise | Corporate Training & Upskilling Solutions",
    description:
      "Cultivate high-performance enterprise teams with Accredian's tailored corporate training programs.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise | Corporate Training & Upskilling Solutions",
    description:
      "Cultivate high-performance enterprise teams with Accredian's tailored corporate training programs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Accredian Enterprise",
  url: "https://enterprise.accredian.com",
  logo: "https://enterprise.accredian.com/favicon.ico",
  contactPoint: {
    "@type": "ContactPoint",
    email: "enterprise@accredian.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900">
        <ModalProvider>
          <AdvancedEffects />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}


