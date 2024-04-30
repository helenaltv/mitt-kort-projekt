import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Page from "./page";
import Knapp from "./Components/Knapp";
import Footer from "./Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Knapp />
        <Footer />
      </body>
    </html>
  );
}
