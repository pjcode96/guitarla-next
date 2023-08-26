import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../navigation/navigation'

const routeList = [
    { label: 'Inicio', href: '/' },
    { label: 'Tienda', href: '/products' },
    { label: 'Nosotros', href: '/about' },
    { label: 'Blog', href: '/posts' },

];

function Header() {
    return (
        <header className="header">
            <div className="header__bar container">
                <Link href='/'>
                    <Image
                        className="header__logo"
                        src='/img/logo.svg'
                        alt='Imagen logo'
                        width='500'
                        height='500'
                    />
                </Link>

                <Navigation
                    routeList={routeList}
                />
            </div>
        </header >
    )
}

export default Header