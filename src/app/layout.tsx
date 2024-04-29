import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


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
      <body className={`${inter.className} ${plus.className}`}>{children}</body>
    </html>
  );
}
