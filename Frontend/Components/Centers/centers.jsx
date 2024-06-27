
import CentersCard from "./centers-card";
import { CentersData } from "../../../Data/centers-page-data";
import "./centers.css";

const Centers = () => {
    return (
        <section id="centers">
            <div className="centers-cont">
                <p className="cc-title">
                    Centers
                </p>
                <div className="cc-card-cont">
                    {CentersData.map((item, index) => (
                        <CentersCard
                            key={index}
                            number={index + 1}
                            title={item.title}
                            points={item.points}
                            imgSrc={item.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Centers;
