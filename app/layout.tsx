import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/global/(navbar)/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenDairy",
  description: "Open Dairy Opensource Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
