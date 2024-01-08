import divider from '@assets/images/divider.png'
import { useTranslation } from 'react-i18next'
export default function MySkillsSection() {
    const {t} = useTranslation()
    const hardSkills = [
        {
            id: 1,
            title: "HTML / CSS and It's Frameworks",
            level: 100,
        },
        {
            id: 2,
            title: "JavaScript",
            level: 65,
        },
        {
            id: 3,
            title: "React and It's Subsets",
            level: 80,
        },
        {
            id: 4,
            title: "Design",
            level: 90,
        },
        {
            id: 5,
            title: "Package Mangers",
            level: 90,
        },
        {
            id: 6,
            title: "working with APIs",
            level: 100,
        },
        {
            id: 7,
            title: "Next.js and Redux.js",
            level: 60,
        },
    ]
    const softSkills = [
        {
            id: 1,
            title: "Responsibility",
            level: 100,
        },
        {
            id: 2,
            title: "Good Listener",
            level: 100,
        },
        {
            id: 3,
            title: "Team work",
            level: 90,
        },
        {
            id: 4,
            title: "Critical",
            level: 100,
        },
        {
            id: 5,
            title: "Creativity and Ideas",
            level: 90,
        },
        {
            id: 6,
            title: "Problem Solving Skill",
            level: 90,
        },
        {
            id: 7,
            title: "Flexible",
            level: 100,
        },
    ]
    return (
        <div className="unslate_co--section section-counter" id="skills-section">
            <div className="container">
                <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider">
                        <span className="gsap-reveal">
                            {t('skills.hardSkill')}
                            <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </span>
                    </h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" width="76" />
                        <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                    </span>
                </div>
                <div className="row pt-5" style={{ justifyContent: "center"  ,gap: "25px 10px"}}>
                    {hardSkills.map(skill => (
                        <div key={skill.id} className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="counter-v1 text-center">
                                <span className="number-wrap">
                                    <span className="number number-counter" data-number={skill.level}>{skill.level}</span>
                                    <span className="append-text">%</span>
                                </span>
                                <span className="counter-label">{skill.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="unslate_co--section section-counter" id="skills-section">
                <div className="container">
                    <div className="section-heading-wrap text-center mb-5">
                        <h2 className="heading-h2 text-center divider">
                            <span className="gsap-reveal">
                                {t('skills.softSkill')}
                                <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                            </span>
                        </h2>
                        <span className="gsap-reveal">
                            <img src={divider} alt="divider" width="76" />
                            <span className="cover" style={{ transform: 'transform: translate(101%, 0%) matrix(1, 0, 0, 1, 0, 0)', transformOrigin: "0% 100% 0px" }}></span>
                        </span>
                    </div>
                    <div className="row pt-5" style={{ justifyContent: "center" , gap: "25px 10px"}}>
                        {softSkills.map(skill => (
                            <div key={skill.id} className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div className="counter-v1 text-center">
                                    <span className="number-wrap">
                                        <span className="number number-counter" data-number={skill.level}>{skill.level}</span>
                                        <span className="append-text">%</span>
                                    </span>
                                    <span className="counter-label">{skill.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
