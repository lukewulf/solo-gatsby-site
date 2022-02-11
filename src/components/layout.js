import * as React from "react"
import { Link } from 'gatsby'
import {
    container,
    navLink,
    navLinkItem,
    navLinkItemText,
    navStyle
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

// Style
const width = 50
// Elements
const Layout = ({pageTitle, children}) => {
    return (
        <div className={container}>
            <title>{pageTitle} | Luke's Site</title>
            <nav className={navStyle}>
                <Link to="/">
                    <StaticImage
                        alt="Luke's Icon"
                        src="../images/lukeIcon.png"
                        width={width}
                    ></StaticImage>
                </Link>
                <ul class={navLink}>
                    <li class={navLinkItem}>
                        <Link to="/" class={navLinkItemText}>Home</Link>
                    </li>
                    <li class={navLinkItem}>
                        <Link to="/about" class={navLinkItemText}>About</Link>
                    </li>
                    <li class={navLinkItem}>
                        <Link to="/projects" class={navLinkItemText}>Projects</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout