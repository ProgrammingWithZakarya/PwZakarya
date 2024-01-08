import { useTranslation } from "react-i18next"


export default function Footer() {
    const {t} = useTranslation();
    return (
        <footer className="unslate_co--footer unslate_co--section" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="footer-site-logo"><a href="#">PwZakarya<span>.</span></a></div>
                        <div className=""><span>Hasanzadahzakarya@gmail.com</span></div>
                        <ul className="footer-site-social">
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    title="@ZakaryaRazi"
                                    href="https://x.com/ZakaryaRazi7?s=09"
                                >
                                    {t('footer.x')}
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    title="programmingwithzakarya"
                                    href="https://instagram.com/programmingwithzakarya?igshid=NzZIODBkYWE4Ng=="
                                >
                                    {t('footer.insta')}
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Zakarya Hasan Zadah"
                                    href="https://www.linkedin.com/in/zakarya-hasan-zadah-841243266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                >
                                    {t('footer.linkedin')}
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Zakarya Hasan Zadah"
                                    href="https://wa.me/message/UH34FEXFW2GNI1"
                                >
                                    {t('footer.wb')}
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    title="@ProgrammingWithZakarya"
                                    href="https://t.me/ProgrammingWithZakarya"
                                >
                                    {t('footer.tel')}
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Zakarya Hasanzadah"
                                    href="https://github.com/Zakaraymangur"
                                >
                                    {t('footer.gitHub')}
                                </a>
                            </li>
                        </ul>
                        {/* <p className="site-copyright">
                            Copyright &copy;
                            {date}
                            All rights reserved | This template is made with {" "}
                            <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" >Colorlib</a>

                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
