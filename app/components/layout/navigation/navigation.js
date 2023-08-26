import Link from "next/link"

function Navigation({ routeList }) {
    return (
        <nav className="navigation">

            {
                routeList.length > 0 &&
                routeList.map(
                    ({ label, href }) => {
                        return (
                            <Link key={href} className="link" href={href}>{label}</Link>
                        )
                    }
                )

            }
        </nav>
    )
}

export default Navigation