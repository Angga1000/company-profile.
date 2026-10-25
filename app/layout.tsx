import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nusantara Digital",
    template: "%s | Nusantara Digital",
  },
  description: "Studio pengembangan perangkat lunak untuk website, aplikasi mobile, dan desain produk digital.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
