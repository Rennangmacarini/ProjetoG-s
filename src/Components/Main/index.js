import styles from './styles.module.css'

export function Main() {
    return (
        <>
            <div className={styles.global}>
                <h1><span>Vantagens</span> de pedir seu gás pelo app</h1>

                <div className={styles.container}>
                    <div className={styles.card}>
                        <img src="./assets/one.png"></img>
                        <div>
                            <h2><span>Atendimento Personalizado</span></h2>
                            <h2>preparada, pronta para te</h2>
                            <h2>atender sempre que</h2>
                            <h2>precisar.</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="./assets/two.png"></img>
                        <div>
                            <h2><span>Segurança e Qualidade</span></h2>
                            <h2>Todos os nossos parceiros</h2>
                            <h2>revendedores de gás, são</h2>
                            <h2>certificados pela ANP,</h2>
                            <h2>garantindo sua qualidade</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="./assets/three.png"></img>
                        <div>
                            <h2><span>Encontre os melhores preços</span></h2>
                            <h2>No app você compara e</h2>
                            <h2>escolhe os melhores preços ai</h2>
                            <h2>da sua região.</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="./assets/four.png"></img>
                        <div>
                            <h2><span>Entrega Grátis</span></h2>
                            <h2>Com o app Gass você recebe</h2>
                            <h2>seu gás em casa e sem pagar nada.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.globalText}>
                <div className={styles.banner}>
                    <img className={styles.imagens} src='./img/celulargas.png'></img>
                    <div className={styles.text}>
                        <h1>Peça agora seu</h1>
                        <h1> <strong>GÁS DE COZINHA!</strong> </h1>
                        <div className={styles.icon}>
                            <a href='https://play.google.com/store/apps/details?id=br.com.levegas' target="blank"><img src='./img/play.png'></img></a>
                            <a href='https://apps.apple.com/br/app/gasss/id1596971957' target="blank"><img src='./img/store.png'></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}