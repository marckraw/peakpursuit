import "../src/styles/global.scss";
import {Poppins} from 'next/font/google'
import React from "react";
import { Metadata } from 'next'
import {getServerSession} from "next-auth";
import {authOptions} from "@/src/lib/auth";
import {MainWrapper} from "@/src/wrappers/main-wrapper";
import {LoginButton} from "@/src/components/LoginButton";
import styles from '../src/styles/global-layout.module.scss'
import {BrandHighlight} from "@/src/components/BrandHighlight";

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
            <div className={styles.teaser}>
                <div>
                    <p>Welcome to <BrandHighlight bold={true}>Peak Pursuit</BrandHighlight> - your ultimate mountain hiking companion! Whether you're a novice hiker or a seasoned mountaineer, our app is designed to transform your journeys into thrilling adventures. With <BrandHighlight>Peak Pursuit</BrandHighlight>, you can track your hikes, mark your progress, and see detailed stats about your trips.</p>

                    <p>Challenge yourself with our unique badge system. Each summit reached is a victory celebrated with a bespoke badge - a digital testament to your triumphs! Collect them all and showcase your mountaineering achievements to the world.</p>

                    <p>The future of hiking is social with <BrandHighlight>Peak Pursuit</BrandHighlight>. Engage in friendly competition with our score-based leaderboards, plan exciting treks with friends, compare stats, and conquer trails together for shared points. Coming soon, our community features will make every hike an opportunity to connect, compete, and collaborate with fellow enthusiasts.</p>

                    <p><BrandHighlight>Peak Pursuit</BrandHighlight> isn't just an app - it's a gateway to unforgettable experiences, shared victories, and a global community united by the love of hiking. Embrace the challenge, reach the summit, and discover what lies beyond with <BrandHighlight>Peak Pursuit</BrandHighlight>.</p>
                </div>
                <LoginButton />
            </div>

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
