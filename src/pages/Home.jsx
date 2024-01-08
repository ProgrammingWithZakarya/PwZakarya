import AboutMeSection from "../components/AboutMeSection";
import ExamplesMyWorkSection from "../components/ExamplesMyWorkSection/ExamplesMyWorkSection";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import HeaderNavBar from "../components/HeaderNavBar";
import Landing from "../components/Landing/Landing";
import MyColleaguesAndFriendsSection from "../components/MyColleaguesAndFriendsSection/MyColleaguesAndFriendsSection";
import MyServiceSection from "../components/MyServiceSection/MyServiceSection";
import MySkillsSection from "../components/MySkillsSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import SliderTechnologiesLogo from "../components/SliderTechnologiesLogoSection/SliderTechnologiesLogo";


export default function Home() {
   
    return (
        <>
            <div className="unslate_co--site-wrap">
                <div className="unslate_co--site-inner">
                    <div className="lines-wrap">
                        <div className="lines-inner">
                            <div className="lines"></div>
                        </div>
                    </div>
                    {/* END lines  */}

                    <HeaderNavBar />
                    {/* END nav  */}

                    <Landing />
                    {/* END .cover-v1  */}

                    <PortfolioSection />
                    <SliderTechnologiesLogo />
                    <AboutMeSection />
                    <MyServiceSection />
                    <MySkillsSection />

                    {/* END .counter  */}

                    <MyColleaguesAndFriendsSection />
                    {/* END testimonial  */}

                    <ExamplesMyWorkSection />
                    {/* END blog posts  */}

                    <GetInTouch />
                </div>
            </div >
            {/* END .unslate_co-site-inner  */}

           <Footer />
        </>
    )
}
// https://www.youtube.com/watch?v=mwtbEGNABWU