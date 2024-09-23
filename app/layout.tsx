import type { Metadata } from "next";
import { Cormorant, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ weight: [ "300", "400", "500", "600", "700" ], style: ["normal", "italic"], subsets: ["latin"], variable: '--font-cormorant' });
const raleway = Raleway({ weight: [ "300", "400", "500", "600", "700" ], style: ["normal", "italic"], subsets: ["latin"], variable: '--font-raleway' });

export const metadata: Metadata = {
  title: "Mathilde Cudeville",
  description: "Artiste Photographe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${cormorant.variable}`}>
      <body className={` h-full `}
    >{children}</body>
    </html>
  );
}
