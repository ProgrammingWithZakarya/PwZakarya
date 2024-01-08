import divider from "@assets/images/divider.png"
import { useTranslation } from "react-i18next"

export default function GetInTouch() {
    const {t} = useTranslation()
    return (
        <div className="unslate_co--section" id="contact-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">{t("contact.header")}</span></h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" width="76" />
                    </span>
                </div>


                <div className="row justify-content-between">

                    <div className="col-md-6">
                        <form method="post" className="form-outline-style-v1" id="contactForm">
                            <div className="form-group row mb-0">

                                <div className="col-lg-6 form-group gsap-reveal">
                                    <label htmlFor="name">{t("contact.name")}</label>
                                    <input name="name" type="text" className="form-control" id="name" />
                                </div>
                                <div className="col-lg-6 form-group gsap-reveal">
                                    <label htmlFor="email">{t("contact.email")}</label>
                                    <input name="email" type="email" className="form-control" id="email" />
                                </div>
                                <div className="col-lg-12 form-group gsap-reveal">
                                    <label htmlFor="message">{t("contact.content")}</label>
                                    <textarea name="message" id="message" cols="30" rows="7" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group row gsap-reveal">
                                <div className="col-md-12 d-flex align-items-center">
                                    <input type="submit" className="btn btn-outline-pill btn-custom-light mr-3" value={t("contact.btnSend")} />
                                    <span className="submitting"></span>
                                </div>
                            </div>
                        </form>
                        <div id="form-message-warning" className="mt-4"></div>
                        <div id="form-message-success">
                            {t("contact.successMessage")}
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="contact-info-v1">
                            <div className="gsap-reveal d-block">
                                <span className="d-block contact-info-label">{t("contact.email")}</span>
                                <a href="#" className="contact-info-val">hasanzadahzakarya@gamil.com</a>
                            </div>
                            <div className="gsap-reveal d-block">
                                <span className="d-block contact-info-label">{t("contact.phoneNum")}</span>
                                <a href="#" className="contact-info-val">+98 914 296 0913</a>
                            </div>
                            <div className="gsap-reveal d-block">
                                <span className="d-block contact-info-label">{t("contact.address")}</span>
                                <address className="contact-info-val">{t("contact.myAddress")}</address>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
