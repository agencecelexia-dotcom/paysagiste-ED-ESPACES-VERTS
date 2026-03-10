import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { clientConfig } from "@/config/client.config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${clientConfig.DOMAINE}`),
  title: {
    default: clientConfig.META_TITLE,
    template: `%s | ${clientConfig.NOM_ENTREPRISE}`,
  },
  description: clientConfig.META_DESCRIPTION,
  keywords: clientConfig.META_KEYWORDS.split(", "),
  authors: [{ name: clientConfig.NOM_ENTREPRISE }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: clientConfig.NOM_ENTREPRISE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
