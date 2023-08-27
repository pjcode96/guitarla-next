'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

function Navigation({ routeList }) {

    const pathname = usePathname()

    return (
        <nav className="navigation">

            {
                routeList.length > 0 &&
                routeList.map(
                    ({ label, href }) => {

                        const isActive = pathname === href

                        return (
                            <Link key={href}
                                className={`${isActive ? 'active' : ''} link`}
                                href={href}>
                                {label}</Link>
                        )
                    }
                )

            }
        </nav>
    )
}

export default Navigation