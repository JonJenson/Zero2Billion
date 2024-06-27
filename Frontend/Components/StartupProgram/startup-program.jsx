import React from "react";
import imgScr from "../../../Data/Images/startup-program-bg.png";
import StartupProgramCard from "./startup-program-card";
import { StartupProgramData } from "../../../Data/startup-program-data";
import "./startup-program.css";

const StartupProgram = () => {
    return (
        <section id="startup-program">
            <div className="startup-program-cont">
                <p className="spc-title">
                    Z2B Startup Program Plan
                </p>
                <div 
                    className="spc-card-cont"
                    style={{backgroundImage: `url(${imgScr})`}}
                >
                    <div className="spc-card-cont-wrapper">
                        {
                            StartupProgramData.map((item, index) => (
                                <StartupProgramCard
                                    key={index}
                                    number={Number(item.number)}
                                    numberStr={item.number}
                                    title={item.title}
                                    points={item.points}
                                    imgScr={item.imgScr}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>   
    )
};

export default StartupProgram;