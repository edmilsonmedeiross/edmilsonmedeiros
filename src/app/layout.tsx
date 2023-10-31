import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Divider } from "antd";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-950 w-full h-full">
        <Header />
        <Divider />
        {children}
      </body>
    </html>
  );
}
