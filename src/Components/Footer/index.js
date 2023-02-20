import styles from './styles.module.css'

export function Footer() {
    return (
        <>
            <div className={styles.content}>
                <div>
                    <img src='./img/logoverde.png'></img>
                    <div className={styles.contentCard}>
                        <a href=''><img src='./img/insta.png'></img></a>
                        <a href=''><img src='./img/face.png'></img></a>
                        <a href=''><img src='./img/playvideo.png'></img></a>
                    </div>
                </div>

                <div className={styles.linkIcons}>
                    <h1>CONTATO</h1>
                    <div className={styles.icons}>
                        <a href=''><img src='./img/message.png'></img> </a>
                        <a href=''>app@ivasko.com.br</a>
                    </div>
                    <div className={styles.icons}>
                        <a href=''><img src='./img/telefone.png'></img></a>
                        <a href=''>(42) 99139-4057</a>
                    </div>
                </div>

                <div className={styles.contentLink}>
                    <h1>SAIBA MAIS</h1>
                    <div className={styles.link}>
                        <a href=''>SEJA UM PARCEIRO</a>
                    </div>
                    <div className={styles.link}>
                        <a href=''>POLÍTICA DE PRIVACIDADE</a>
                    </div>
                </div>
            </div>
        </>

    )
}