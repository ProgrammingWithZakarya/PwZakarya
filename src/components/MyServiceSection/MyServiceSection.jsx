import divider from '@assets/images/divider.png'
import MyServiceItem from './MyServiceItem'
import optionsImage from "@assets/images/svg/001-options.svg"
import chatImage from "@assets/images/svg/002-chat.svg"
import contactBookImage from "@assets/images/svg/003-contact-book.svg"
import percentImage from "@assets/images/svg/004-percentage.svg"
import lineChatImage from "@assets/images/svg/005-line-chart.svg"
import goalImage from "@assets/images/svg/006-goal.svg"
import { useTranslation } from 'react-i18next'

export default function MyServiceSection() {
    const {t} = useTranslation()
    const data = [
        {
            id: 1,
            img: optionsImage,
            title: <h3>Digital <br /> Strategy</h3>,
            desc: <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        },
        {
            id: 2,
            img: chatImage,
            title: <h3>Web <br /> Design</h3>,
            desc: <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        },
        {
            id: 3,
            img: contactBookImage,
            title: <h3>User <br /> Experience</h3>,
            desc: <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        },
        {
            id: 4,
            img: percentImage,
            title: <h3>Web <br /> Development</h3>,
            desc: <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        },
        {
            id: 5,
            img: lineChatImage,
            title: <h3>Web <br /> Development</h3>,
            desc: <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        },
        {
            id: 6,
            img: goalImage,
            title: <h3>WordPress <br /> Solutions</h3>,
            desc: <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
        },
    ]
    return (

        <div className="unslate_co--section" id="services-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider">
                        <span className="gsap-reveal">
                            {t("myServices.header")}
                            <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </span>
                    </h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" width="76" />
                        <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                    </span>
                </div>
                <div className="row gutter-v3" style={{justifyContent: "center"}}>
                    {data.map(item => <MyServiceItem key={item.id} {...item} />)}
                </div>
            </div>
        </div>
    )
}
