import type { Metadata } from "next";
import "./globals.css";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nazmul Hasan — Fullstack Web Developer",
  description:
    "Nazmul Hasan is a Fullstack Web Developer specializing in modern web applications using Next.js, React, Node.js, and MongoDB. Building scalable, high-performance, and user-focused digital experiences.",
  keywords: [
    "Nazmul Hasan",
    "Fullstack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Nazmul Hasan" }],
  creator: "Nazmul Hasan",

  openGraph: {
    title: "Nazmul Hasan — Fullstack Web Developer",
    description: "Building scalable and modern web applications with Next.js, React, Node.js, and MongoDB.",
    url: "https://your-domain.com", // 🔥 replace with your domain
    siteName: "Nazmul Hasan Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nazmul Hasan — Fullstack Web Developer",
    description: "Fullstack developer crafting fast, scalable, and modern web apps.",
    creator: "@yourhandle", // optional
  },

  metadataBase: new URL("https://your-domain.com"), // 🔥 replace
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSerif.variable} ${dmSans.variable} ${dmMono.variable} antialiased font-body min-h-screen bg-[#F9F7F7] dark:bg-dark-bg transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
