import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Particles from "@/app/components/Particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Project Proposal: Reimagining Mohan Raj Madawala",
  description: "Fusing magic realism with artificial intelligence to create a transcendent literary icon for CIBF 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-slate-900 text-slate-200 font-inter`}>
        <Particles />
        {children}
      </body>
    </html>
  );
}
