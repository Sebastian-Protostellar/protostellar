import type { Metadata } from "next";
import { Instrument_Serif, Poppins } from "next/font/google";
import { PortalProvider } from "@/components/portal-dialog";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Protostellar",
    template: "%s · Protostellar",
  },
  description: site.statement,
  applicationName: "Protostellar",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Protostellar",
    description: site.statement,
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Protostellar",
    images: [{ url: "/brand/share.jpg", width: 1024, height: 665, alt: "Protostellar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protostellar",
    description: site.statement,
    images: ["/brand/share.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-warm">
        <PortalProvider>{children}</PortalProvider>
      </body>
    </html>
  );
}
