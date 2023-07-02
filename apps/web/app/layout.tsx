import {Poppins} from 'next/font/google'
import React from "react";
import { Metadata } from 'next'
import {getServerSession} from "next-auth";
import {authOptions} from "@/src/lib/auth";
import {MainWrapper} from "@/src/wrappers/main-wrapper";
import {LoginButton} from "@/src/components/LoginButton";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin-ext']
})


export const metadata: Metadata = {
    title: "Hike IT!",
    description: "This is hike it app"
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
            <body className={poppins.className}>
            <LoginButton />
            </body>
            </html>
        )
    }

  return (
    <html lang="en">
      <body className={poppins.className}>
      <MainWrapper>
          {children}
      </MainWrapper>
      </body>
    </html>
  );
}
