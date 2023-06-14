import {Poppins} from 'next/font/google'
import React from "react";
import { Metadata } from 'next'
import {Header} from "../components/Header/Header";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin-ext']
})


export const metadata: Metadata = {
    title: "Hike IT!",
    description: "This is hike it app"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
      <main>
          {children}
      </main>
      </body>
    </html>
  );
}
