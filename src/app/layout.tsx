import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ui/ParticlesBackground"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahmy Rosyadi | Portfolio",
  description: "Portfolio of a Full-Stack Developer & Cloud Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground /> 
        <div className="relative z-10"> {/* <-- Bungkus children */}
          {children}
        </div>
      </body>
    </html>
  );
}