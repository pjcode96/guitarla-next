import './globals.css'
import { Outfit } from 'next/font/google'
import Header from './components/header/header'

const outfit = Outfit(
  {
    weight: ['400', '600', '700', '900'],
    subsets: ['latin'],
    display: 'swap'
  }
)

export const metadata = {
  charset: 'utf-8',
  title: 'GuitarLA - Inicio',
  description: 'GuitarLA, tienda de guitarras, blog de música.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
