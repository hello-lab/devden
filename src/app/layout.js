import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

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

export const metadata = {
  title: "DEVDEN",
  description: "Created using nextjs",
};

export const generateViewport = () => {
  return {
    width: "device-width",
    initialScale: 1,
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Suspense fallback={<Loading />}>
        
        </Suspense>
        {children}
      </body>
    </html>
    
  );
}
