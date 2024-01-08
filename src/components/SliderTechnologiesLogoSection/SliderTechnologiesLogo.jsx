import { Swiper, SwiperSlide } from "swiper/react";
import SlideTechnologiesLogo from "./SlideTechnologiesLogo";
import html from '@logos/html-5.svg'
import css from '@logos/css-3.svg'
import bootstrap from '@logos/bootstrap.svg'
import tailwind from '@logos/tailwindcss.svg'
import sassLogo from '@logos/sass.svg'
import js from '@logos/js.svg'
import reactLogo from '@logos/react.svg'
import reduxLogo from '@logos/redux.svg'
import viteLogo from '@logos/vitejs.svg'
import webpack from '@logos/webpack.svg'
import nextJs from '@logos/nextjs.svg'
import npm from '@logos/npm.svg'
import yarn from '@logos/yarn.svg'
import postman from '@logos/postman.svg'
import git from '@logos/git.svg'
import github from '@logos/github.svg'
import gitlab from '@logos/gitlab.svg'
import codepen from '@logos/codepen.svg'
import stackOverFlow from '@logos/stack-overflow.svg'
import { Autoplay, Pagination } from 'swiper/modules';
export default function SliderTechnologiesLogo() {
    const data = [
        {
            id: 1,
            img: html,
        },
        {
            id: 2,
            img: css,
        },
        {
            id: 3,
            img: bootstrap,
        },
        {
            id: 4,
            img: tailwind,
        },
        {
            id: 5,
            img: sassLogo,
        },
        {
            id: 6,
            img: js,
        },
        {
            id: 7,
            img: reactLogo,
        },
        {
            id: 8,
            img: reduxLogo,
        },
        {
            id: 9,
            img: viteLogo,
        },
        {
            id: 10,
            img: webpack,
        },
        {
            id: 11,
            img: nextJs,
        },
        {
            id: 12,
            img: npm,
        },
        {
            id: 13,
            img: yarn,
        },
        {
            id: 14,
            img: postman,
        },
        {
            id: 15,
            img: git,
        },
        {
            id: 16,
            img: github,
        },
        {
            id: 17,
            img: gitlab,
        },
        {
            id: 18,
            img: codepen,
        },
        {
            id: 19,
            img: stackOverFlow,
        },
    ]
    return (
        <div className="unslate_co--section">
            <div className="container">
                <div className="owl-carousel logo-slider owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage"  >
                            <Swiper
                                slidesPerView={3}
                                speed={700}
                                loop={true}
                                className="mySwiper"
                                modules={[Pagination, Autoplay]}
                                centeredSlides={true}
                                spaceBetween='50px'
                                autoplay={{
                                    delay: 500,
                                    disableOnInteraction: false,
                                }}

                            >
                                {data.map(item => <SwiperSlide key={item.id} style={{userSelect: "none"}}><SlideTechnologiesLogo {...item} /></SwiperSlide>)}
                            </Swiper>
                        </div>
                    </div>
                    <div className="owl-nav disabled">
                        <button type="button" role="presentation" className="owl-prev">
                            <span aria-label="Previous">‹</span>
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                            <span aria-label="Next">›</span>
                        </button>
                    </div>
                    <div className="owl-dots disabled"></div>
                </div>
            </div>
        </div>
    )
}
