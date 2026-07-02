import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { NoiseBackground } from "@/components/animations/noise-background";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AFFOBE — Digital Experience",
  description: "Award-winning digital architecture and spatial web design.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen cursor-none`}
      >
          <LenisProvider>
            <CustomCursor />
            <NoiseBackground />
            {children}
          </LenisProvider>
      </body>
    </html>
  );
}
