import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';
import Footer from "@/components/Footer";
import CookiesPolicy from "@/components/CookiesPolicy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameVault",
  description: "GameVault - The ultimate gaming e-commerce experience. Buy skins, mods, codes, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#181840',
                color: '#00eaff',
                border: '2px solid #00eaff',
                boxShadow: '0 0 16px #00eaff44, 0 0 8px #a259ff44',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
              },
              iconTheme: {
                primary: '#00eaff',
                secondary: '#181840',
              },
            }}
          />
          <div className="mt-20">
            {children}
          </div>
          <Footer />
          <CookiesPolicy />
        </CartProvider>
      </body>
    </html>
  );
}
