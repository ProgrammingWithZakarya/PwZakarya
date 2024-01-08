
export default function PortfolioItem({img , title , shortDesc , href ,classes}) {

  return (
    <div className={`item col-sm-6 col-md-6 col-lg-4 isotope-mb-2 ${classes}`} >
      <a href={href} className="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
        <div className="reveal-wrap">
          <span className="cover" style={{ marginLeft: "102%" }}></span>
          <div className="reveal-content" style={{ visibility: "inherit", opacity: 1 }} >
            <div className="overlay">
              <span className="wrap-icon icon-link2"></span>
              <div className="portfolio-item-content">
                <h3>{title}</h3>
                <p>{shortDesc}</p>
              </div>
            </div>
            <img src={img} className="lazyload  img-fluid" alt="Images" style={{ visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }} />
          </div>
        </div>
      </a>
    </div>
  )
}
