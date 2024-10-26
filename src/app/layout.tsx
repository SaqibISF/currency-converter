import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Currency Convertor",
  description: "Create Currency Convertor by using APIs",
  icons:["/currency-exchange.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundImage:"url(currency-image.jpg)"}}
       className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-no-repeat bg-[left_center]`}>
        {children}
      </body>
    </html>
  );
}
