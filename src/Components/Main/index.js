import styles from './styles.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";



export function Main() {
    return (
        <>
            <div className={styles.global}>
                <h1><span>Vantagens</span> de pedir seu gás pelo app</h1>
            </div>

            <div className={styles.carousel}>
                <Swiper
                    slidesPerView={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        500: { slidesPerView: 1 },
                        800: { slidesPerView: 3 },
                      }}
                    autoplay={{
                        delay: 1500,
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/one.png"></img>
                            <div>
                                <h2><span>Atendimento Personalizado</span></h2>
                                <h2>Preparado e pronta para te</h2>
                                <h2>atender sempre que</h2>
                                <h2>precisar.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/three.png"></img>
                            <div>
                                <h2><span>Encontre os melhores preços</span></h2>
                                <h2>No app você compara e</h2>
                                <h2>escolhe os melhores preços!</h2>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/four.png"></img>
                            <div>
                                <h2><span>Entrega Grátis</span></h2>
                                <h2>Com o app Gass você recebe</h2>
                                <h2>seu gás em casa e sem pagar pela entrega.</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/one.png"></img>
                            <div>
                                <h2><span>Atendimento Personalizado</span></h2>
                                <h2>Preparado e pronta para te</h2>
                                <h2>atender sempre que</h2>
                                <h2>precisar.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/three.png"></img>
                            <div>
                                <h2><span>Encontre os melhores preços</span></h2>
                                <h2>No app você compara e</h2>
                                <h2>escolhe os melhores preços!</h2>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/four.png"></img>
                            <div>
                                <h2><span>Entrega Grátis</span></h2>
                                <h2>Com o app Gass você recebe</h2>
                                <h2>seu gás em casa e sem pagar pela entrega.</h2>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/one.png"></img>
                            <div>
                                <h2><span>Atendimento Personalizado</span></h2>
                                <h2>Preparado e pronta para te</h2>
                                <h2>atender sempre que</h2>
                                <h2>precisar.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/three.png"></img>
                            <div>
                                <h2><span>Encontre os melhores preços</span></h2>
                                <h2>No app você compara e</h2>
                                <h2>escolhe os melhores preços!</h2>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.card}>
                            <img src="./assets/four.png"></img>
                            <div>
                                <h2><span>Entrega Grátis</span></h2>
                                <h2>Com o app Gass você recebe</h2>
                                <h2>seu gás em casa e sem pagar pela entrega.</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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