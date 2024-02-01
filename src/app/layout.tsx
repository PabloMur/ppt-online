import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomLayout } from "@/components/CustomLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piedra Papel o Tijera",
  description: "Generated by a great developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
