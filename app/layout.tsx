import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karim Shady",
  icons: {
    icon: [
      {
        url: "/Icons/favicon.png",
        sizes: "54x54",
        type: "image/png",
      },
      {
        url: "/Icons/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${geistSans.variable} ${geistMono.variable} ${figtree.variable} font-sans`}
    >
      <head>
        {/* Enclosed properly inside <head> to avoid hydration errors */}
        <link rel="icon" href="/Icons/favicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* <Header /> */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
