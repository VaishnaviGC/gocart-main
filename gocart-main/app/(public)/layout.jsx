'use client'
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import StoreProvider from "@/app/StoreProvider";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <StoreProvider>
            <Toaster />
            <Navbar />
            <Banner />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}