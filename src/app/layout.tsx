
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Free Fonts",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full">
      
      <body className="">      
        <div className="fixed top-0 z-50 sm:flex h-fit">
          <Header></Header>
        </div>
      {children}

      </body>
    </html>
  );
}
