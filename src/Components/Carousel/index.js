
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './styles.module.css'

import { Autoplay } from "swiper";
// import required modules
import { Pagination, Navigation } from "swiper";

export function Carousel() {
  return (
    <>
      <div className={styles.text}>
        <h1>Peça seu gás em até <span>3 Cliques</span></h1>
      </div>

      <div className={styles.carousel}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
              <div className={styles.paragraphOpen}>
                  <p>Encontre a</p>
                  <p><span>Revenda mais próximo</span> ou</p>
                  <p>com <span>melhor preço</span></p>
                </div>
                <img src="./assets/celular01.png"></img>
                <div className={styles.paragraphClose}>
                  <p>Encontre a</p>
                  <p><span>Revenda mais próximo</span> ou</p>
                  <p>com melhor preço</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
              <div className={styles.paragraphOpen}> 
                  <p>Escolha a</p>
                  <p><span>Forma de pagamento.</span></p>
                </div>
                <img className={styles.img} src="./assets/celular02.png"></img>
                <div className={styles.paragraphClose}> 
                  <p>Encontre a</p>
                  <p><span>Forma de pagamento.</span></p>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
              <div className={styles.paragraphOpen}>
                  <p>Pronto!</p>
                  <p><span>Agora é só acompanhar</span></p>
                  <p>a entrega do seu gás.</p>
                </div>
                <img src="./assets/celular03.png"></img>
                <div className={styles.paragraphClose}>
                  <p>Pronto!</p>
                  <p><span>Agora é só acompanhar</span></p>
                  <p>a entrega do seu gás.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
              <div className={styles.paragraphOpen}>
                  <p>Encontre a</p>
                  <p><span>Revenda mais próximo</span> ou</p>
                  <p>com melhor preço</p>
                </div>
                <img src="./assets/celular01.png"></img>
                <div className={styles.paragraphClose}>
                  <p>Encontre a</p>
                  <p><span>Revenda mais próximo</span> ou</p>
                  <p>com melhor preço</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
              <div className={styles.paragraphOpen}>
                  <p>Escolha a</p>
                  <p><span>Forma de pagamento.</span></p>
                </div>
                <img className={styles.img} src="./assets/celular02.png"></img>
                <div className={styles.paragraphClose}>
                  <p>Escolha a</p>
                  <p><span>Forma de pagamento.</span></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
              <div className={styles.paragraphOpen}>
                  <p>Pronto!</p>
                  <p><span>Agora é só acompanhar</span></p>
                  <p>a entrega do seu gás.</p>
                </div>
                <img src="./assets/celular03.png"></img>
                <div className={styles.paragraphClose}>
                  <p>Pronto!</p>
                  <p><span>Agora é só acompanhar</span></p>
                  <p>a entrega do seu gás.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.banner}>
        <img className={styles.openImagem} src="./assets/pagamentos.png"></img>
        <img className={styles.closeImagem} src="./img/cadeado.png"></img>
      </div>
    </>
  );
}

