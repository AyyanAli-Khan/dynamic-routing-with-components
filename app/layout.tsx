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
  title: "Ayyan Ali Khan",
  description: "dynamic routing app",
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
        <h1 className="md:text-5xl lg:text-5xl text-800 absolute top-[10%] right-[40%] text-teal-800
        font-bold text-center text-3xl tracking-tight leading-none  ">
          Ayyan Ali Khan
        </h1>
        {children}
      </body>
    </html>
  );
}
