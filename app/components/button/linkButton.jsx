import Link from 'next/link'
import React from 'react'
import styles from './linkButton.module.css'

function LinkButton({ to, children }) {
    return (
        <Link className={styles.link__button} href={to}>{children}</Link>
    )
}

export default LinkButton