import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/fragments/Header";
import { Footer } from "@/fragments/Footer";
import { LenisScroller } from "@/fragments/SmoothScroller";
import NoiseComponent from "@/fragments/Noise";
import FSideNav from "@/fragments/SideNavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-[hsl(231,33%,83%)]">
      <body>
        <NoiseComponent />
        <LenisScroller />
        <FSideNav />
        <main className={`${poppins.className}`}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
