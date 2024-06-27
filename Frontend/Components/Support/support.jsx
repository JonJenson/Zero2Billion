import React from "react";
import SupportCard from "./support-card";
import { SupportData } from "../../../Data/support-data";
import "./support.css";

const Support = () => {
    return (
        <section id="support">
            <div className="support-cont">
                <p className="sc-title">
                    Our Tri-Cycle Process
                </p>
                <div className="sc-card-cont">
                    {SupportData.map((item, index) => (
                        <SupportCard
                            key={index}
                            number={index + 1}
                            title={item.title}
                            details={item.details}
                            knowMoreUrl={item.knowMoreUrl}
                            imgScr={item.imgScr}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Support;