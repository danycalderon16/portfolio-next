import type { Metadata } from "next";
import { Inter,Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/providers/client-providers";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DACV - Porfolio",
  description: "Visit mi linkeid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientProviders>
        <body className={inter.className}>{children}</body>
      </ClientProviders>
    </html>
  );
}
