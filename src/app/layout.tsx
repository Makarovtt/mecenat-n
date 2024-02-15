import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";

export const metadata: Metadata = {
  title: "Благотворительный фонд «Меценат - Н»",
  description:
    "Благотворительный фонд социально-экологического направления «Меценат–Н» — разносторонняя благотворительная организация, которая старается охватить наиболее важные и актуальные проблемы экологии и социальной сферы, требующие оперативного внимания и срочной помощи",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          fontSans.variable,
        )}
      >
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
