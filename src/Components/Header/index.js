import styles from './styles.module.css'

export function Header() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.close} src='./img/banner.png' />

                <div className={styles.backgroundOpen}>
                    <div className={styles.cardOpen}>
                        <img className={styles.open} src='./img/celulargas.png'></img>
                        <div>
                            <h1>Peça seu GÁS</h1>
                            <h1>DE COZINHA</h1>
                            <h1>pelo</h1>
                            <h1>app GASSS</h1>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p><strong>Não perca mais tempo ligando para as revendas!</strong></p>
                        <p>Peça seu botijão de gás através do app Gasss,</p>
                        <p>Compare os <strong>melhores preços</strong> da sua região</p>
                    </div>
                    <div className={styles.img}>
                        <a href='https://play.google.com/store/apps/details?id=br.com.levegas' target="blank"><img src='./img/play.png' /></a>
                        <a href='https://apps.apple.com/br/app/gasss/id1596971957' target="blank"><img src='./img/store.png' /></a>
                    </div>
                </div>

                <div className={styles.content}>
                    <h1>SEU GÁS DE</h1>
                    <h1>COZINHA ACABOU?</h1>
                    <div className={styles.text}>
                        <p><strong>Não perca mais tempo ligando para as revendas!</strong></p>
                        <p>Peça seu botijão de gás através do app Gasss,</p>
                        <p>Compare os <strong>melhores preços</strong> da sua região</p>
                    </div>
                    <div className={styles.img}>
                        <a href='https://play.google.com/store/apps/details?id=br.com.levegas' target="blank"><img src='./img/play.png' /></a>
                        <a href='https://apps.apple.com/br/app/gasss/id1596971957' target="blank"><img src='./img/store.png' /></a>
                    </div>
                </div>
            </div>

            <div className={styles.faixa}>
                <img src='./img/faixa.png'></img>
                <div className={styles.banner}>
                    <img src='./img/ultragas.png'></img>
                    <img src='/img/supergas.png'></img>
                    <img src='./img/nacional.png'></img>
                </div>
            </div>

            <div className={styles.information}>
                <h2><span>Compre</span> pelo nosso app</h2>
                <p>No aplicativo você encontra as melhores ofertas.<span> É rápido, facil e seguro.</span> </p>
                <div className={styles.imagem}>
                    <a href='https://play.google.com/store/apps/details?id=br.com.levegas' target="blank"><img src='./img/playRoxo.png' /></a>
                    <a href='https://apps.apple.com/br/app/gasss/id1596971957' target="blank"><img src='./img/storeRoxo.png' /></a>
                </div>
            </div>
        </>
    )
}