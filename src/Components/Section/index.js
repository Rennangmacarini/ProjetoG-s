import styles from './styles.module.css'

export function Section() {
    return (
        <>
            <div className={styles.content}>
                <h1>Saiba aonde o app <span>Gass está disponivel</span></h1>

                <div className={styles.h3}>
                    <h3>Sul</h3>
                </div>

                <div className={styles.h2}>
                    <h2>PARANÁ</h2>
                    <span>+</span>
                </div>

                <div className={styles.city}>
                    <h4>Irati</h4>
                    <h4>Ponta Grossa</h4>
                    <h4>Curitiba</h4>
                    <h4>Guarapuava</h4>
                    <h4>São Mateus do Sul</h4>
                    <h4>Telêmaco-Borba</h4>
                </div>
                <h5>Se você é um revendedor em outras regiões e deseja ser nosso parceiro,</h5>
                <h5>entre em contato pelo <a href='mailto:apps@ivasko.com.br' target="blank">e-mail.</a></h5>
                
            </div>

        </>
    )
}