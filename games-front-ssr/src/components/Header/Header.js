import { useRouter } from 'next/router'
import Link from "next/link"
import styles from "./Header.module.css"

const navigtion = [
    { id: 1, title: 'Главная', path: '/' },
    { id: 2, title: 'Все игры', path: '/allgames' },
    { id: 3, title: 'D&D', path: '/d&d' },
    { id: 4, title: 'НРИ', path: '/trpg' },
    { id: 5, title: 'Настолки', path: '/tablegames' },
    { id: 6, title: 'Ролевки', path: '/roleplays' },

]

const Header = () => {
    const { pathname } = useRouter()

    return (
        <header className={styles.header}>
            <nav className={styles.logo}>
                <Link href="/" className={styles.logoLink}>
                    <h1 className={styles.logoText}>Эхо легенд</h1>
                </Link>
            </nav>
            <ul className={styles.navigation}>
                {navigtion.map(({ id, title, path }) => (
                    <li key={id} className={styles.navigationText}>
                        <Link className={pathname === path ? styles.active : styles.bookmarkText} href={path}>
                            {title}
                        </Link></li>
                ))}
            </ul>
        </header >
    )
}

export default Header