import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavAndSidebar from "@/components/NavAndSidebar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vroom - Car Inspection",
  description: "Professional mobile car inspection service. 600+ point inspections for gas, hybrid, and electric vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <NavAndSidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
