import person from  '@assets/images/zakarya_2.jpg'

export default function MyFiendItemWrapper({img, name , desc, skill}) {
  return (
      <div className="owl-item cloned" style={{width: "100%"}}>
          <div>
              <div className="testimonial-v1">
                  <div className="testimonial-inner-bg">
                      <span className="quote">“</span>
                      <blockquote>{desc}</blockquote>
                  </div>
                  <div className="testimonial-author-info">
                      <img src={person} alt="Image" />
                      <h3>{name}</h3>
                      <span className="d-block position">{skill}</span>
                  </div>
              </div>
          </div>
      </div>
  )
}
