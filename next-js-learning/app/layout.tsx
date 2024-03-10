import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react'
import Loading from "./loading";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIC App",
  description: "practice is important",
};

export default function RootLayout(props:{
  children: React.ReactNode,
  analytics: React.ReactNode,
  team:React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<Loading />}>
        RootLayout<br></br>
        {props.children}
        {props.analytics}
        {props.team}
        {props.modal}
      </Suspense>

      </body>
    </html>
  );
}
