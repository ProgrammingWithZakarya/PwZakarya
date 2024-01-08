import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ExampleWorkItem({ title, createBy, durationOfStudy, img , index}) {
    const {t} = useTranslation()
    return (
        <div className={`col-sm-6 col-md-6 blog-post-entry aos-init aos-animate ${ index === 0 ? 'col-lg-8' :'col-lg-4'}`} data-aos="fade-up" data-aos-delay="0">
            <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                    <div className="portfolio-item-content">
                        <h3>{title}</h3>
                        <p className="post-meta">{t('articles.author')} {createBy} <span className="small">•</span> {durationOfStudy} {t('articles.minRead')}</p>
                    </div>
                </div>
                <img src={img} className="lazyload" alt="Image" />
            </a>
        </div>
    )
}
