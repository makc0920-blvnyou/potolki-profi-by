import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Натяжные потолки в Минске под ключ от 25 BYN/м² | ПотолкиПрофи",
  description:
    "Качественные натяжные потолки в Минске и РБ. Безопасный монтаж, гарантия 15 лет. Скидка 15% новоселам. Бесплатный замер. Установка за 1 день.",
  openGraph: {
    title: "ПотолкиПрофи — натяжные потолки в Минске",
    description:
      "Качественные натяжные потолки от 25 BYN/м². Безопасный монтаж, гарантия 15 лет.",
    locale: "ru_BY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-body antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
