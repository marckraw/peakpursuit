import "../src/styles/global.scss";
import {Poppins} from 'next/font/google'
import React from "react";
import { Metadata } from 'next'
import {getServerSession} from "next-auth";
import {authOptions} from "@/src/lib/auth";
import {MainWrapper} from "@/src/wrappers/main-wrapper";
import {Teaser} from "@/src/components/Teaser/Teaser";
import clsx from "clsx";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin-ext']
})


export const metadata: Metadata = {
    title: "Peak Pursuit",
    description: "This is peak pursuit web app"
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);
    console.log(session);

    if(!session) {
        return (
            <html lang="en">
            <body className={clsx(poppins.className)}>
                <Teaser />
            </body>
            </html>
        )
    }

  return (
    <html lang="en">
    <body className={clsx(poppins.className)}>
      <MainWrapper>
          {children}
      </MainWrapper>
      </body>
    </html>
  );
}
