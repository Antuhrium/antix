import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import 'swiper/scss';
import styles from "./FeaturedIn.module.scss";
import { logos } from "./mocdata"; 

const FeaturedIn: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>Featured in</h4>
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0} 
          slidesPerView={window.innerWidth > 1200 ? 4 : 3} 
          loop={true}
          speed={window.innerWidth > 1200 ? 2000 : 1500} 
          autoplay={{
            delay: 0,
            disableOnInteraction: false, 
          }}
          allowTouchMove={false} 
          grabCursor={false}
        >
          {logos.map((url, index) => (
            <SwiperSlide key={index} className={styles.item}>
              <img src={url} alt="Featured in" height={40} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedIn;
