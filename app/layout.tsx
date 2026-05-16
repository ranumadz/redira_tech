import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// FONT
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://rediratech.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Redira Technology",
  alternateName: "Redira",
  url: siteUrl,
  logo: `${siteUrl}/images/logo_redira.png`,
  description:
    "Redira Technology membantu bisnis membangun website, mobile app, dashboard, dan solusi SaaS modern.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Indonesian"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Redira Technology",
  url: siteUrl,
  description:
    "Jasa pembuatan aplikasi, website bisnis, dashboard admin, mobile app, dan sewa aplikasi SaaS untuk bisnis modern.",
  inLanguage: "id-ID",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Redira Technology | Jasa Pembuatan Aplikasi & Sewa Aplikasi",
    template: "%s | Redira Technology",
  },

  description:
    "Redira Technology membantu bisnis membangun website, mobile app, dashboard admin, sistem operasional, dan solusi SaaS modern yang aman, fleksibel, dan siap berkembang.",

  keywords: [
    "Redira Technology",
    "Redira",
    "rediratech",
    "jasa pembuatan aplikasi",
    "jasa pembuatan website",
    "jasa website bisnis",
    "jasa aplikasi web",
    "jasa mobile app",
    "sewa aplikasi",
    "aplikasi SaaS",
    "dashboard admin",
    "sistem operasional bisnis",
    "software house Indonesia",
    "jasa software Indonesia",
    "website company profile",
    "landing page bisnis",
  ],

  applicationName: "Redira Technology",
  authors: [{ name: "Redira Technology" }],
  creator: "Redira Technology",
  publisher: "Redira Technology",
  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Redira Technology",
    title: "Redira Technology | Jasa Pembuatan Aplikasi & Sewa Aplikasi",
    description:
      "Bangun website, mobile app, dashboard admin, dan solusi SaaS modern untuk bisnis Anda bersama Redira Technology.",
    images: [
      {
        url: "/images/logo_redira.png",
        width: 1200,
        height: 630,
        alt: "Redira Technology - Jasa Pembuatan Aplikasi dan Sewa Aplikasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Redira Technology | Jasa Pembuatan Aplikasi & Sewa Aplikasi",
    description:
      "Solusi website, aplikasi, dashboard admin, dan SaaS modern untuk bisnis yang ingin bergerak lebih cepat.",
    images: ["/images/logo_redira.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/logo_redira.png",
    shortcut: "/images/logo_redira.png",
    apple: "/images/logo_redira.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}