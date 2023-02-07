import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div>Контактная особа:</div>
                <div className={styles.contactInner}>
                    <div>
                        <div> Тарас Красавин</div>
                        <div><i style={{ color: "#FDC609" }} className="fa-solid fa-paper-plane"></i>
                            <a style={{ color: "#FDC609" }} href="https://telegram.me/Moisha39">@Moisha39</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer