import styles from './styles.module.css'

export function Vantagem() {
    return (
        <>
            <div>
                <div className={styles.banner}>
                    <img src="assets/vantagem.png" />
                </div>

                <div className={styles.container}>

                    <div className={styles.card}>
                        <img src="assets/preco.png" />
                        <h1>PESQUISE PREÇO</h1>
                        <p>Encontre o melhor preço</p>
                        <p>da cidade.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="assets/entrega.png" />
                        <h1>ENTREGA RÁPIDA</h1>
                        <p>Consulte a revenda mais</p>
                        <p>próxima e entrega mais </p>
                        <p>rápida.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="assets/taxa.png" />
                        <h1>PREÇO FINAL</h1>
                        <p>Sem taxas adicionais</p>
                        <p>frete</p>
                    </div>

                    <div className={styles.card}>
                        <img src="assets/phone.png" />
                        <h1>SEM LIGAÇÕES</h1>
                        <p>Sem necessidade de</p>
                        <p>ligações.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="assets/gas.png" />
                        <h1>PRÁTICO</h1>
                        <p>Peça seu gás em até 3</p>
                        <p>cliques.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="assets/cadeado.png" />
                        <h1>SEGURO</h1>
                        <p>Faça o pagamento</p>
                        <p>diretamente para a</p>
                        <p>revenda.</p>
                    </div>
                </div>
            </div>
        </>
    )
}