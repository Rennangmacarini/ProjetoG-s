
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './styles.module.css'

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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
                <img src="./assets/celular01.png"></img>
                <p>Encontre a</p>
                <p><span>Revenda mais próximo</span> ou</p>
                <p>com melhor preço</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
                <img className={styles.img} src="./assets/celular02.png"></img>
                <p>Encontre a</p>
                <p><span>Forma de pagamento.</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
                <img src="./assets/celular03.png"></img>
                <p>Pronto!</p>
                <p><span>Agora é só acompanhar</span></p>
                <p>a entrega do seu gás.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
                <img src="./assets/celular01.png"></img>
                <p>Encontre a</p>
                <p><span>Revenda mais próximo</span> ou</p>
                <p>com melhor preço</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
                <img className={styles.img} src="./assets/celular02.png"></img>
                <p>Encontre a</p>
                <p><span>Forma de pagamento.</span></p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.paragraph}>
                <img src="./assets/celular03.png"></img>
                <p>Pronto!</p>
                <p><span>Agora é só acompanhar</span></p>
                <p>a entrega do seu gás.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.banner}>
        <img src="./assets/pagamentos.png"></img>
      </div>
    </>
  );
}

