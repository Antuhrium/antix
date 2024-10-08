import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import 'swiper/scss';
import styles from "./FeaturedIn.module.scss";
import { logos } from "./mocdata"; 

const FeaturedIn: React.FC = () => {
  const swiperRef = useRef<any>(null); 
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>Featured in</h4>
      <div className={styles.container}
        onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef} 
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
              {
                url.href ? (
                <a href={url.href} style={{cursor: "pointer"}} target="_blank">
                  <img src={url.logo} alt="Featured in" height={40} />
                </a>
                ) : <img src={url.logo} alt="Featured in" height={40} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedIn;
