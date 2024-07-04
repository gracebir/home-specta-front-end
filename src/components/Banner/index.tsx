/** @format */

import Slider from "react-slick";
import { bannerItems } from "../../utils/constants";
import BannerItem from "./BannerItem";

function Banner() {
    const settings = {
        customPaging: function (i: number) {
            return (
                <div className='rounded-[15px] px-3 py-2 bg-[#F9F9F9] bg-opacity-20 flex gap-1 items-center inset-0 backdrop-blur-xl'>
                    <div
                        className={`h-[10xp] w-[10px] rounded-full ${
                            i === 0 ? "bg-active" : "bg-secondary"
                        }`}
                    ></div>
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        arrows: true,
    };
    return (
        <div className='h-[459px] slider-container rounded-2xl banner-slider overflow-hidden '>
            <Slider {...settings}>
                {bannerItems.map((item) => (
                    <BannerItem
                        key={item.id}
                        title={item.title}
                        backgroundUrl={item.backgroundUrl}
                        description={item.description}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default Banner;
