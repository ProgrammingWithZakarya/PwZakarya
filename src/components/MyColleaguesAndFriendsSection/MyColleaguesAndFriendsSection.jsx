import { SwiperSlide ,Swiper } from "swiper/react";
import MyFiendItemWrapper from "./MyFiendItemWrapper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import divider from '@assets/images/divider.png'
import personMan1Image from '@assets/images/person_man_1.jpg'
import personMan2Image from '@assets/images/person_man_2.jpg'
import personMan3Image from '@assets/images/person_man_3.jpg'
import personWoman1Image from '@assets/images/person_woman_1.jpg'
import PersonWoman2Image from '@assets/images/person_woman_2.jpg'
import { useTranslation } from "react-i18next";

export default function MyColleaguesAndFriendsSection() {
    const {t} = useTranslation()
    const myFriends = [
        {
            id: 1,
            name: "Erica Miller",
            skill: "Product Designer @Twitter",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            img: personMan1Image
        },
        {
            id: 2,
            name: "Erica Miller",
            skill: "Product Designer @Twitter",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            img: personMan2Image
        },
        {
            id: 3,
            name: "Erica Miller",
            skill: "Product Designer @Twitter",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            img: personMan3Image
        },
        {
            id: 4,
            name: "Erica Miller",
            skill: "Product Designer @Twitter",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            img: personWoman1Image
        },
        {
            id: 5,
            name: "Erica Miller",
            skill: "Product Designer @Twitter",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            img: PersonWoman2Image
        },

    ]
    return (
        <div className="unslate_co--section" id="testimonial-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider">
                        <span className="gsap-reveal">
                            {t("myTeam.header")}
                            <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </span>
                    </h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" width="76" />
                        <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                    </span>
                </div>
            </div>
            <div className="owl-carousel testimonial-slider aos-init aos-animate owl-loaded owl-drag" data-aos="fade-up">
                <div className="owl-stage-outer">
                    <div className="owl-stage w-full d-flex justify-center items-center" >
                        <Swiper
                            className="mySwiper justify-center"
                            modules={[Autoplay ,Pagination]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction :false
                            }}
                            loop={true}
                            speed={700}
                            slidesPerView={1}
                            spaceBetween={500}
                            centeredSlides={true}
                        >
                            {myFriends.map(item => <SwiperSlide key={item.id}><MyFiendItemWrapper {...item} /></SwiperSlide>)}
                        </Swiper>

                    </div>
                </div>


            </div>
        </div>
    )
}
