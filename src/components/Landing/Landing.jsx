// import {zakaryaBackground} from '@assets/images/zakarya_1.jpg'
import { useTranslation } from "react-i18next"
import { TypeAnimation } from "react-type-animation"



export default function Landing() {
    const { t } = useTranslation()
    const txt1 = t('landing.txt1')
    const txt2 = t('landing.txt2')
    const txt3 = t('landing.txt3')
    return (
        <div
            className="cover-v1 jarallax"
            id="home-section"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 mx-auto text-center">
                        <h1 className="heading gsap-reveal-hero">
                            <span className="reveal-wrap">
                                <span className="cover" style={{ marginLeft: "102%" }}></span>
                                <span className="reveal-content" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>PwZakarya<span style={{ color: '#d63447' }}>.</span></span>
                            </span>
                        </h1>
                        <h2 className="subheading gsap-reveal-hero">
                            <span className="reveal-wrap">
                                <span className="cover" style={{ marginLeft: "102%" }}></span>
                                <span className="reveal-content" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                    <TypeAnimation
                                        sequence={[
                                            txt1,
                                            3000,
                                            txt2,
                                            3000,
                                            txt3,
                                            5000
                                        ]}
                                        wrapper="span"
                                        speed={40}
                                        repeat={Infinity}
                                        deletionSpeed={90}
                                    />
                                </span>
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <a href="#portfolio-section" className="mouse-wrap smoothscroll">
                <span className="mouse">
                    <span className="scroll"></span>
                </span>
                <span className="mouse-label">{t('landing.scroll')}</span>
            </a>
            <div id="jarallax-container-0"
                style={
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: " 100%",
                        height: "50%",
                        overflow: "hidden",
                        pointerEvents: "none",
                        zIndex: -100,
                    }
                }>
                <div
                    style={
                        {
                            backgroundPositionY: "0%",
                            backgroundPositionX: "100%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "1148px",
                            height: "1004px",
                            overflow: "hidden",
                            pointerEvents: "none",
                            marginTop: "-3px",
                            transform: "translate3d(0px, 3px, 0px)"
                        }} ></div>
            </div>
        </div>
    )
}
