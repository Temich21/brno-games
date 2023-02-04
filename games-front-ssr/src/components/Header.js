import { useRouter } from 'next/router'
import Link from "next/Link"
import styles from "../styles/global.css"

const navigtion = [
    { id: 1, title: 'Главная', path: '/homepage' },
    { id: 2, title: 'Все игры', path: '/allgames' },
    { id: 3, title: 'D&D', path: '/d&d' },
    { id: 4, title: 'НРИ', path: '/trpg' },
    { id: 5, title: 'Настолки', path: '/tablegames' },
    { id: 6, title: 'Ролевки', path: '/roleplays' },

]

const Header = () => {
    const { pathname } = useRouter()

    return (
        <header>
            <nav>
                <a href="../src/pages/index.js">
                    <h1>Эхо легенд</h1>
                </a>
            </nav>
            <ul className="navigation">
                {navigtion.map(({ id, title, path }) => (
                    <li><Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : styles.bookmarkText}>{title}</a>
                    </Link></li>
                ))}
            </ul>
        </header >
    )
}

export default Header