import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "{{ORG_NAME}} | Registered Investment Advisory",
  description: "{{ORG_NAME}} provides proprietary investment research and investment strategies with successful individuals seeking financial unbiased guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-white text-gray-900`}
      >
        {children}
        <script dangerouslySetInnerHTML={{ __html: `{{TRACKING_SCRIPT}}` }} />
      </body>
    </html>
  );
}