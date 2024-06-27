import React from "react";
import GetMakersTurnCard from "./get-makers-turn-card";
import { GetMakersTurnData } from "../../../Data/get-makers-turn-data";
import { descriptionDetails } from "../../../Data/join-makers-turn-data";
import "./get-makers-turn.css";

const GetMakersTurn = () => {
    return (
        <div id="get-makers-turn">
            <div className="get-makers-turn-cont">
                <p className="gmtc-title">
                    What You Get at MakersTurn !
                </p>
                <div className="gmtc-description-cont">
                    <span className="gmtc-dc-line1 gmtc-dc-line">
                        {descriptionDetails.line1}
                    </span>
                    <span className="gmtc-dc-line2 gmtc-dc-line">
                        {descriptionDetails.line2}
                    </span>
                </div>
                <div className="gmtc-card-cont">
                    {
                        GetMakersTurnData.map((item, index) => (
                            <GetMakersTurnCard
                                key={index}
                                number={index + 1}
                                title={item.title}
                                description={item.description}
                                bgImg={item.bgImg}
                                redirectUrl={item.redirectUrl}
                                stripColor={item.stripColor}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default GetMakersTurn;