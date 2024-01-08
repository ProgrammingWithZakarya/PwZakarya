import { useEffect, useState } from "react"
import { changeTheme } from "../functions/change-theme";
import { useAppContext } from "../context/app/AppContext";
import { useTranslation } from "react-i18next";

export default function HeaderNavBar() {
    const { changeLanguage } = useAppContext();
    const {t} = useTranslation();

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        changeTheme(theme)
    }, [theme])

    return (
        <nav className="unslate_co--site-nav site-nav-target">
            <div className="container">
                <div className="row align-items-center justify-content-between text-left">
                    <div className="col-md-5 text-right">
                        <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                            <li className="has-children">
                                <a href="#" className="nav-link active">{t("navbarHeader.home")}</a>
                                <ul className="dropdown">
                                    {/* <li>
                                        <a href="#">Hero Image BG</a>
                                    </li> */}
                                    <li><a href="" className="nav-link">Resume PDF</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="nav-link">{t("navbarHeader.portfolio")}</a></li>
                            <li><a href="#" className="nav-link">{t("navbarHeader.about")}</a></li>
                            <li><a href="#" className="nav-link">{t("navbarHeader.services")}</a></li>
                        </ul>
                    </div>
                    <div className="site-logo pos-absolute">
                        <a href="#" className="unslate_co--site-logo">PwZakarya<span>.</span></a>
                    </div>
                    <div className="col-md-5 text-right text-lg-left">
                        <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                            <li><a href="#" className="nav-link">{t("navbarHeader.skills")}</a></li>
                            <li><a href="#" className="nav-link">{t("navbarHeader.contact")}</a></li>
                            <li className="has-children">
                                <a href="#">
                                    {t("navbarHeader.languages")}
                                </a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="#" onClick={() => changeLanguage('en')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="25px" viewBox="0 0 24 24">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.175-2.5-2.5-2.5S16 13.07 16 14.5V20h-2V10zm-2-6v2H4v5h8v2H4v5h8v2H2V4h10z" />
                                            </svg>
                                            {" "}
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => changeLanguage('fa')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#000000"
                                                version="1.1"
                                                id="Layer_1"
                                                viewBox="0 0 20 20"
                                                xmlSpace="preserve"
                                                width="25px"
                                                height="25px"
                                            >
                                                <g id="webinar">
                                                    <g transform="translate(-325.000000, -431.000000)">
                                                        <g id="Perian-Copy-2" transform="translate(325.000000, 431.000000)">
                                                            <path id="فـ" d="M5.2,18.1v-1.8h3.7c0.7,0,1.3-0.1,1.7-0.2c0.4-0.1,0.8-0.2,1-0.4c0.2-0.2,0.4-0.3,0.5-0.5s0.1-0.4,0.2-0.5     h-1.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6-0.1s-0.4-0.1-0.7-0.2c-0.2-0.1-0.4-0.2-0.7-0.3c-0.2-0.1-0.3-0.2-0.5-0.4     c-0.2-0.2-0.3-0.3-0.5-0.6C7.1,13,7,12.8,6.9,12.4c-0.1-0.3-0.1-0.7-0.1-1.1c0-0.5,0.1-1,0.3-1.5C7.2,9.4,7.5,9,7.8,8.7     C8.2,8.4,8.5,8.1,9,7.9s0.9-0.3,1.4-0.3c0.6,0,1.1,0.1,1.5,0.4s0.9,0.6,1.2,1c0.3,0.5,0.6,1,0.8,1.7c0.2,0.7,0.2,1.5,0.2,2.3v1.3     c0,0.6-0.1,1.2-0.4,1.7c-0.3,0.5-0.6,0.9-1.1,1.2c-0.9,0.5-2.1,0.8-3.7,0.8H5.2z M10.3,9.5c-0.2,0-0.4,0-0.6,0.1     C9.5,9.7,9.3,9.8,9.1,9.9c-0.2,0.2-0.3,0.3-0.4,0.6c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.2,0,0.4,0.1,0.5c0,0.1,0.1,0.3,0.2,0.4     c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0.1,0.2,0.1c0.2,0.1,0.4,0.2,0.7,0.2s0.6,0.1,1,0.1h1.5c0-0.6-0.1-1.2-0.2-1.7     c-0.1-0.5-0.3-0.9-0.5-1.2C11.3,9.7,10.9,9.5,10.3,9.5z M8.2,4.1l2.2-2.2l2.3,2.3l-2.2,2.2L8.2,4.1z" />
                                                        </g>
                                                    </g>
                                                </g>
                                                <rect className="st0" width="20" height="20" style={{ fill: "none" }} />
                                            </svg>
                                            Persian
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#" className="nav-link">
                                    {t("navbarHeader.themes")}
                                </a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="#" onClick={() => setTheme('light')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="-5.5 0 32 32" version="1.1">
                                                <title>light</title>
                                                <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z" />
                                            </svg>
                                            Light
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => setTheme('dark')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#000000"
                                                width="25px"
                                                height="25px"
                                                viewBox="0 0 24 24"
                                                stroke="#000000"
                                                strokeWidth="0.576"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    <g id="Dark">
                                                        <path d="M12.741,20.917a9.389,9.389,0,0,1-1.395-.105,9.141,9.141,0,0,1-1.465-17.7,1.177,1.177,0,0,1,1.21.281,1.273,1.273,0,0,1,.325,1.293,8.112,8.112,0,0,0-.353,2.68,8.266,8.266,0,0,0,4.366,6.857,7.628,7.628,0,0,0,3.711.993,1.242,1.242,0,0,1,.994,1.963h0A9.148,9.148,0,0,1,12.741,20.917ZM10.261,4.05a.211.211,0,0,0-.065.011,8.137,8.137,0,1,0,9.131,12.526h0a.224.224,0,0,0,.013-.235.232.232,0,0,0-.206-.136A8.619,8.619,0,0,1,14.946,15.1a9.274,9.274,0,0,1-4.883-7.7,9.123,9.123,0,0,1,.4-3.008.286.286,0,0,0-.069-.285A.184.184,0,0,0,10.261,4.05Z" />
                                                    </g>
                                                </g>

                                            </svg>
                                            Dark
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                            <li><a href="#js-menu-toggle">Menu</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
