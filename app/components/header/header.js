import Image from "next/image"
import logo from '../../../public/img/header.jpg'
import Link from "next/link"
import styles from './header.module.css'

function Header() {
    return (
        <header className={`${styles.header} header`}>
            <div className="bar container">
                <nav className="navigation">
                    <Link href='/'>Inicio</Link>
                    <Link href='/products'>Tienda</Link>
                    <Link href='/about'>Nosotros</Link>
                    <Link href='/blog'>Blog</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header