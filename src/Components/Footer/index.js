import styles from './styles.module.css'

export function Footer() {
    return (
        <>
            <div className={styles.content}>
                <div>
                    <img src='./img/logoverde.png'></img>
                    <div className={styles.contentCard}>
                        <a href='https://www.instagram.com/gasssapp/' target='blank'><img src='./img/insta.png'></img></a>
                        <a href='https://pt-br.facebook.com/gasssapp' target='blank'><img src='./img/face.png'></img></a>
                        <a href='https://www.youtube.com/@gasss9626' target='blank'><img src='./img/playvideo.png'></img></a>
                    </div>
                </div>

                <div className={styles.linkIcons}>
                    <h1>CONTATO</h1>
                    <div className={styles.icons}>
                        <a href='mailto:app@ivasko.com.br' target="blank"><img src='./img/message.png'></img> </a>
                        <a href='mailto:app@ivasko.com.br' target="blank">app@ivasko.com.br</a>
                    </div>
                    <div className={styles.icons}>
                        <a href='tel: 42991394057'><img src='./img/telefone.png'></img></a>
                        <a href='tel: 42991394057' target="blank">(42) 99139-4057</a>
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