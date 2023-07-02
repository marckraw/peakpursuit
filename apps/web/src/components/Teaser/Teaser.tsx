import React from "react";
import styles from "./teaser.module.scss";
import {BrandHighlight} from "@/src/components/BrandHighlight";
import {LoginButton} from "@/src/components/LoginButton";
import Image from 'next/image'

export const Teaser = () => {
    return (
        <div className={styles.teaser}>
            <Image
                src="/assets/logo-1.png"
                width={128}
                height={128}
                alt="pre logo picture"
            />
            <div>
                <p>Welcome to <BrandHighlight bold={true}>Peak Pursuit</BrandHighlight> - your ultimate mountain hiking companion! Whether you're a novice hiker or a seasoned mountaineer, our app is designed to transform your journeys into thrilling adventures. With <BrandHighlight>Peak Pursuit</BrandHighlight>, you can track your hikes, mark your progress, and see detailed stats about your trips.</p>

                <p>Challenge yourself with our unique badge system. Each summit reached is a victory celebrated with a bespoke badge - a digital testament to your triumphs! Collect them all and showcase your mountaineering achievements to the world.</p>

                <p>The future of hiking is social with <BrandHighlight>Peak Pursuit</BrandHighlight>. Engage in friendly competition with our score-based leaderboards, plan exciting treks with friends, compare stats, and conquer trails together for shared points. Coming soon, our community features will make every hike an opportunity to connect, compete, and collaborate with fellow enthusiasts.</p>

                <p><BrandHighlight>Peak Pursuit</BrandHighlight> isn't just an app - it's a gateway to unforgettable experiences, shared victories, and a global community united by the love of hiking. Embrace the challenge, reach the summit, and discover what lies beyond with <BrandHighlight>Peak Pursuit</BrandHighlight>.</p>
            </div>
            <LoginButton />
        </div>
    )
}