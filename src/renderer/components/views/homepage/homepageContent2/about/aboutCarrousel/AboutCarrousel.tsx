import React from 'react';
import "./index.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import Marquee from "react-fast-marquee";

import ape1 from "../../../../../../../assets/images/tokens/1.jpg";
import ape2 from "../../../../../../../assets/images/tokens/2.jpg";
import ape3 from "../../../../../../../assets/images/tokens/3.jpg";
import ape4 from "../../../../../../../assets/images/tokens/4.jpg";
import ape5 from "../../../../../../../assets/images/tokens/5.jpg";
import ape6 from "../../../../../../../assets/images/tokens/6.jpg";
import ape7 from "../../../../../../../assets/images/tokens/7.jpg";
import ape8 from "../../../../../../../assets/images/tokens/8.jpg";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
const apesimg = [
  ape1,
  ape2,
  ape3,
  ape4,
  ape5,
  ape6,
  ape7,
  ape8,
];

SwiperCore.use([Navigation, Autoplay]);
export default function AboutCarrousel(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });
  return (
    <div className="a-carrousel" id="collections">
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        autoplay={true}
        loop={true}
      >
        <Marquee gradient={false} speed={70} >
        {apesimg.map((img, index) => (
          <div key={index} className="parent-a-carrousel" >
            <div className="a-carrousel-img">
              <img src={img} alt={`${index}`} />
            </div>
          </div>
        ))}
        </Marquee>
      </Swiper>
    </div>
  );
}
