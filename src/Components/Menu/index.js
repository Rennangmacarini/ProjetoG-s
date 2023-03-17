import { useState } from 'react'
import styles from './styles.module.css'


export function Menu() {

  const [show, setShow] = useState(false);


    return (
        <>
            <div className={styles.global}>
                <img src="./img/logoverde.png" />
                <img onClick={() => setShow(!show)} className={styles.iconsmenu} src={show ? "./img/x-menu.png" : "./img/menu.png"} />
                <div className={styles.menu}>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre nós</a>
                    <a href="/vantagem">Vantagens</a>
                </div>
            </div>

            {
                show &&
                <div className={styles.globalMenu}>
                <div className={styles.linksmenu}>
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre nós</a>
                    <a href="/vantagem">Vantagens</a>
                </div>
            </div>
            }
           
        </>
    )
}