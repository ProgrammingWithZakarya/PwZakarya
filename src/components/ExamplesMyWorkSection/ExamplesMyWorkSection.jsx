import divider from '@assets/images/divider.png'
import image from '@assets/images/post_5.jpg';
import image2 from '@assets/images/work_1_full.jpg'
import ExampleWorkItem from './ExampleWorkItem';
import { useTranslation } from 'react-i18next';
export default function ExamplesMyWorkSection() {
    const {t} = useTranslation()
    const exampls = [
        {
            id: 1,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image,
            firstPost: true
        },
        {
            id: 2,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image2
        },
        {
            id: 3,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image
        },
        {
            id: 4,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image2
        },
        {
            id: 5,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image2
        },
        {
            id: 6,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image
        },
        {
            id: 7,
            title: "A Mounteering Guide For Beginners",
            createBy: "Joefrey",
            durationOfStudy: "5",
            img: image2
        },
    ]
    return (
        <div className="unslate_co--section" id="journal-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider">
                        <span className="gsap-reveal">
                            {t('articles.header')}
                            <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </span>
                    </h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" width="76" />
                        <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                    </span>
                </div>
                <div className="row gutter-v4 align-items-stretch">
                    {exampls.map((item, index) => <ExampleWorkItem key={item.id} {...item} index={index} />)}

                </div>
            </div>
        </div>
    )
}
