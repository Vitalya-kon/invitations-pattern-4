import type { Metadata } from "next";
import { Marck_Script, Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import { ColorSchemeScript } from "@mantine/core";
import Providers from "./providers";
import "./globals.css";

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marck",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Андрей & Валерия — Свадебное приглашение",
  description:
    "Вы не просто так получили это приглашение! В особенный для нас день мы очень хотим, чтобы вы были рядом!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript forceColorScheme="light" />
      </head>
      <body
        className={`${marckScript.variable} ${cormorant.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
