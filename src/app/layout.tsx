import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "fortunethedev",
  description: "This is Fortune's Portfolio!",
};

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--inter",
  weight: ["300", "400", "500", "600"] 
});

const plus = Plus_Jakarta_Sans({
  weight: ["300","400", "500", "600", "700"],
  variable: "--plus-jarkata",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="google-site-verification" content="CbBtPM3tMTrn1_aEgueq4S1_PrNX2Qs5Z-AKwznwc7g"/>
      </head>
      <body className={`${inter.className} ${plus.className}`}>
        {children}

        <Toaster/>
        <GoogleAnalytics gaId="G-BZ5CJ8DH33"/>
      </body>
    </html>
  );
}
