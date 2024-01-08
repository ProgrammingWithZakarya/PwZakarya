import React from 'react'

export default function SlideTechnologiesLogo({ img }) {
    return (
        <div className='"owl-item' >
            <div className="logo-v1 gsap-reveal">
                <img src={img} alt="Image" className="img-fluid" />
                <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
            </div>
        </div>
    )
}
