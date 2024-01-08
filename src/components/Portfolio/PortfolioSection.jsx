import { useEffect, useState } from "react"
import PortfolioItem from "./PortfolioItem"
import changeItemsShown from "../../functions/changeItemsShown"
import { useTranslation } from "react-i18next"
export default function PortfolioSection() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState("*")
    const [itemsShown, setItemsShown] = useState(changeItemsShown("*"))
    useEffect(() => {
        setItemsShown(changeItemsShown(activeFilter))
    }, [activeFilter])
    return (
        <div className="unslate_co--section" id="portfolio-section">
            <div className="container">
                <div className="relative">
                    <div className="loader-portfolio-wrap">
                        <div className="loader-portfolio"></div>
                    </div>
                </div>
                <div id="portfolio-single-holder"></div>
                <div className="portfolio-wrapper">
                    <div className="d-flex align-items-center mb-4 gsap-reveal gsap-reveal-filter">
                        <h2 className="mr-auto heading-h2">
                            <span className="gsap-reveal">
                                {t('portfolio.header')}
                                <span
                                    className="cover"
                                    style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}
                                >
                                </span>
                            </span>
                        </h2>
                        <a href="#" className="text-white js-filter d-inline-block d-lg-none">{t('portfolio.filter')}</a>
                        <div className="filter-wrap">
                            <div className="filter ml-auto" id="filters">
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "*") && "active"}
                                    onClick={() => setActiveFilter("*")}
                                    data-filter="*">
                                    {t("portfolio.categories.all")}
                                </a>
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "personal") && "active"}
                                    onClick={() => setActiveFilter("personal")}
                                    data-filter="personal">
                                    {t("portfolio.categories.personal")}
                                </a>
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "company") && "active"}
                                    onClick={() => setActiveFilter("company")}
                                    data-filter="company">
                                    {t("portfolio.categories.company")}
                                </a>
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "store") && "active"}
                                    onClick={() => setActiveFilter("store")}
                                    data-filter="store">
                                    {t("portfolio.categories.store")}
                                </a>
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "panel-admin") && "active"}
                                    onClick={() => setActiveFilter("panel-admin")}
                                    data-filter="panel-admin">
                                    {t("portfolio.categories.panel-admin")}
                                </a>
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "template") && "active"}
                                    onClick={() => setActiveFilter("template")}
                                    data-filter="template">
                                    {t("portfolio.categories.template")}
                                </a>
                                <a
                                    href="#portfolio-section"
                                    className={(activeFilter === "production") && "active"}
                                    onClick={() => setActiveFilter("production")}
                                    data-filter="production">
                                    {t("portfolio.categories.production")}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="posts" className="row gutter-isotope-item">
                        {itemsShown.length === 0 ? (
                            <p style={{ textAlign: "center", width: "100%", fontSize: "25px", color: "#d63447" }}>No Result!</p>
                        ) : (
                            <>
                                {
                                    itemsShown.map(item => <PortfolioItem {...item} key={item.id} />)
                                }
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
