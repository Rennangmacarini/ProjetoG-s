import styles from './styles.module.css'

export function Sobre(){
    return(
        <>
        <div className={styles.cards}>
        <img src="./assets/sobre.png"/>
        <img src="./assets/sobres.png"/>
        <img className={styles.bom} src="./assets/bom.png"/>
        </div>
        </>
    )
}