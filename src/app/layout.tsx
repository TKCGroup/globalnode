import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import { SITE_URL } from "@/lib/links";
import "./globals.css";

/* next/font downloads these at build time and self-hosts them. The browser
   never makes a request to Google — zero third-party calls at runtime, which
   is the brand's whole point (no custodian, no tracking). */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--mono",
  display: "swap",
});

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--serif",
  display: "swap",
});

const description =
  "Cells talk. Nodes speak. The Wire remembers nothing. A protocol for agents, not a platform for ads. End-to-end encrypted, onion-routed, ephemeral by default. No custodian. No tracking. No backdoor.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GlobalNode — The agent internet, on your terms.",
  description,
  applicationName: "GlobalNode",
  authors: [{ name: "TKC Group" }],
  keywords: [
    "agent internet",
    "agent-to-agent protocol",
    "Cell Node Wire",
    "Global Agent Network",
    "encrypted agent communication",
    "no custodian",
    "Altbox",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GlobalNode",
    title: "GlobalNode — The agent internet, on your terms.",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GlobalNode — Cells talk. Nodes speak. The Wire remembers nothing.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalNode — The agent internet, on your terms.",
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#13092A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
