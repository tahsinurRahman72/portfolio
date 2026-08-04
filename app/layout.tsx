import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Background } from "@/components/background";
import { profile } from "@/data/resume";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tahsinur",
  description: profile.tagline,
  authors: [{ name: profile.name }],
  keywords: [
    "Tahsinur Rahman",
    "Detection Engineer",
    "Data Engineer",
    "Cybersecurity",
    "MITRE ATT&CK",
    "Portfolio",
  ],
  openGraph: {
    title: "Tahsinur",
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
