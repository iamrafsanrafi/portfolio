import { Analytics } from '@vercel/analytics/next'; // Analytics component from Vercel

import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Rafsan Rafi | Computer Programmer",
  description: "Hey, there! I’m Rafsan Rafi, a passionate computer programmer. I love turning ideas into code!",
  icons: {
    icon: "/assets/images/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#111a28] ${montserrat.className}`}
      >
        {children}

        {/* Calling the analytics component */}
        <Analytics />
      </body>
    </html>
  );
}
