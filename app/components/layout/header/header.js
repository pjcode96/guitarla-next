import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__bar} container`}>
                <Link href='/'>
                    <Image
                        className={styles.header__logo}
                        src='/img/logo.svg'
                        alt='Imagen logo'
                        width='300'
                        height='300'
                    />
                </Link>
                <nav className={styles.navigation}>
                    <Link className={`${styles.header__link}`} href='/'>Inicio</Link>
                    <Link className={`${styles.header__link}`} href='/products'>Tienda</Link>
                    <Link className={`${styles.header__link}`} href='/about'>Nosotros</Link>
                    <Link className={`${styles.header__link}`} href='/blog'>Blog</Link>
                </nav>
            </div>
        </header >
    )
}

export default Header