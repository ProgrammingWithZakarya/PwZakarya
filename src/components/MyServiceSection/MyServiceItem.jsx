import React from 'react'

export default function MyServiceItem({ img, title, desc }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="feature-v1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="wrap-icon mb-3">
                    <img src={img} alt="Image" className="img-fluid" width="45" />
                </div>
                {title}
                {desc}
            </div>
        </div>
    )
}
