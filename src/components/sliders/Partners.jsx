import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";


const PartnersSlider = ({partner}) => {
  return (
    <>
    {/* partners */}
    <div className="mil-soft-bg">
        <div className="container mil-p-0-120">
            <Swiper
                {...SliderProps.milInfiniteSlider}
                className="swiper-container mil-infinite-show mil-up"
            >
                {partner.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`partners-slider-item-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame" style={{"width": "60px"}}>
                    <img src={item.image} alt={item.name} />
                </a>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;