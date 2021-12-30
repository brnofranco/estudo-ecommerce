import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './style.js'

export function Header() {
    return(
        <Navbar>
            <Link href="/shop">Shop</Link>
            <a href="">FAQ</a>
            <Link href="/" passHref>
                <Image src="/mainLogo.png" alt="logo crypto store" width="70px" height="70px"/>
            </Link>
            <a href="">About</a>
            <a href="">Contact</a>
        </Navbar>
    )
}