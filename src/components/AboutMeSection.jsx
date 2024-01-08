import divider from '@assets/images/divider.png'
import aboutMe from '@assets/images/zakarya_1.jpg'
import { useTranslation } from 'react-i18next'

export default function AboutMeSection() {
    const {t} = useTranslation()
    return (
        <div className="unslate_co--section" id="about-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider">
                        <span className="gsap-reveal">
                            {t('aboutMe.header')}
                            <span className="cover" style={{ transform: 'translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </span>
                    </h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" width="76" />
                        <span className="cover" style={{ transform: 'translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span></span>
                </div>
                <div className="row mt-5 justify-content-between">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <figure className="dotted-bg gsap-reveal-img ">
                            <div className="reveal-wrap">
                                <span className="cover" style={{ marginLeft: "102%" }}></span>
                                <div className="reveal-content" style={{ visibility: "inherit", opacity: 1 }}>
                                    <img
                                        src={aboutMe}
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="col-lg-4 pr-lg-5">
                        <h3 className="mb-4 heading-h3">
                            <span className="gsap-reveal">
                                {t('aboutMe.title')}
                                <span className="cover" style={{ transform: 'translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                            </span>
                        </h3>
                        <p className="lead gsap-reveal">
                            {t('aboutMe.txt1')}
                            <span className="cover" style={{ transform: 'translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </p>
                        <p className="mb-4 gsap-reveal">
                            {t('aboutMe.txt2')}
                            <span className="cover" style={{ transform: 'translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </p>
                        <p className="gsap-reveal">
                            <a href="#" className="btn btn-outline-pill btn-custom-light">{t('aboutMe.btnDownload')}</a>
                            <span className="cover" style={{ transform: 'translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px", cursor: "pointer" }}></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
