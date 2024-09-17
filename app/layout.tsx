import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanith Flory | Web Developer & Designer",
  description:
    "Welcome to the personal website of Tanith, a web developer and designer specializing in creating dynamic and engaging user experiences. Explore my portfolio and projects.",
  keywords:
    "Tanith Flory, Web Development, Full Stack Developer, Portfolio, JavaScript, React, Next.js, Tailwind CSS, TypeScript",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
