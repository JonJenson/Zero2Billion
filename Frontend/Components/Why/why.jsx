
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { WhyData } from "../../../Data/why-data";
import imgScr from "../../../Data/Images/why-bg.png";
import "./why.css";

const Why = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="why" ref={ref}>
            <div className="why-cont">
                <p className="wc-title">
                    Why Z2B
                </p>
                <div 
                    className="wc-counter-cont"
                    style={{backgroundImage: `url(${imgScr})`}}
                >
                    <div className="wc-cc-se wc-cc-item">
                        <p className="wc-cc-se-number wc-cc-i-number">
                            {inView ? <CountUp start={0} end={WhyData.startupsEmpowered} duration={2} /> : 0}+
                        </p>
                        <p className="wc-cc-se-title wc-cc-i-title">
                            Startups Empowered
                        </p>
                    </div>
                    <div className="wc-cc-ie wc-cc-item">
                        <p className="wc-cc-ie-number wc-cc-i-number">
                            {inView ? <CountUp start={0} end={WhyData.incubatorsEstablished} duration={2} /> : 0}+
                        </p>
                        <p className="wc-cc-ie-title wc-cc-i-title">
                            Incubators Established
                        </p>
                    </div>
                    <div className="wc-cc-cc wc-cc-item">
                        <p className="wc-cc-cc-number wc-cc-i-number">
                            {inView ? <CountUp start={0} end={WhyData.cultivatedCollaborations} duration={2} /> : 0}+
                        </p>
                        <p className="wc-cc-cc-title wc-cc-i-title">
                            Cultivated Collaborations
                        </p>
                    </div>
                    <div className="wc-cc-sa wc-cc-item">
                        <p className="wc-cc-sa-number wc-cc-i-number">
                            {inView ? <CountUp start={0} end={WhyData.sustainabilityAssurance} duration={2} /> : 0}+
                        </p>
                        <p className="wc-cc-sa-title wc-cc-i-title">
                            Sustainability Assurance
                        </p>
                    </div>
                    <div className="wc-cc-gef wc-cc-item">
                        <p className="wc-cc-gef-number wc-cc-i-number">
                            ${inView ? <CountUp start={0} end={WhyData.grantsAndExternalFunds} duration={2} /> : 0}M
                        </p>
                        <p className="wc-cc-gef-title wc-cc-i-title">
                            Grants & External Funds
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Why;