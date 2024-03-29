import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "../providers/ConvexClientProvider";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Care",
  description: "Platform for managing your pets care business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#e5e8ec] min-h-screen`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
