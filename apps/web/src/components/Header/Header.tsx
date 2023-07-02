import Link from "next/link";
import {LogoutButton} from "@/src/components/LogoutButton";

const Header = () => {
    return (
        <header>
            <div>
                <h2>Hike IT Logo</h2>
                <div>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/about/me'}>About Me</Link></li>
                        <li><Link href={'/code/repos'}>Repos</Link></li>
                    </ul>
                </div>
                <div>
                    <LogoutButton />
                </div>
            </div>
        </header>
    )
}

export {Header}