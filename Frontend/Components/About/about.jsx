
import AboutCard from "./about-card";
import { AboutData } from "../../../Data/about-data";
import "./about.css";

const About = () => {
    return (
        <section id="aboutus">
            <div className="about-cont">
                {
                    AboutData.map((item, index) => {
                        return (
                            <AboutCard
                                key={index}
                                number={index+1}
                                title={item.title}
                                description={item.description}
                                highlightAfter={item.highlightAfter}
                                imgScr={item.imgScr}
                                highlightBefore={item.highlightBefore}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
};

export default About;