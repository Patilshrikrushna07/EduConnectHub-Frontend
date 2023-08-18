import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import Image from 'next/image';
import { TbHandClick } from 'react-icons/tb'

export default function HomeSlider() {
    const sliderData = [
        { name: 'https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg', path: '/div1' },
        { name: 'https://soliloquywp.com/wp-content/uploads/2016/08/11-Website-Slider-Best-Practices-That-You-Must-Follow.png', path: '/div2' },
        { name: 'https://soliloquywp.com/wp-content/uploads/2016/09/How-to-Add-a-Homepage-Slider-in-WordPress.png', path: '/div3' }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 1 second
        // prevArrow: <button type="button" className="slick-prev">Previous</button>,
        // nextArrow: <button type="button" className="slick-next">Next</button>

    };
    return (
        <div className='md:w-[850px] w-[350px] md:p-0 p-5 md:mr-0 mr-3  md:ml-0 ml-2 '>
            <Slider {...settings} >
                {sliderData.map((slider, i) => (
                    <div key={i} className="relative">
                        <div className=" md:h-[200px] h-[100px] rounded-[20px] relative">
                            <Image className=' h-[100px] md:h-[200px] rounded-[20px]' src={slider.name} alt="Slide 1" layout="fill" />
                        </div>
                        <a href={slider.path}>
                            <button className="absolute top-[250px] right-0 transform -translate-y-1/2 py-2 px-3 mr-[40px] font-bold text-4xl bg-white rounded-[10px]">
                                <TbHandClick />
                            </button>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    )
}