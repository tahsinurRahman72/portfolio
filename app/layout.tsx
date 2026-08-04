import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Background } from "@/components/background";
import { profile } from "@/data/resume";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.role}`,
  description: profile.tagline,
  authors: [{ name: profile.name }],
  keywords: [
    "Tahsinur Rahman",
    "Data Scientist",
    "AI Data Trainer",
    "Machine Learning",
    "Data Science",
    "Portfolio",
  ],
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
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
