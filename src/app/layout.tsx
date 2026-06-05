import type { Metadata } from "next";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
