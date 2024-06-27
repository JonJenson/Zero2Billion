import React from "react";
import JoinMakersTurnCard from "./join-makers-turn-card";
import { descriptionDetails, JoinMakersTurnData } from "../../../Data/join-makers-turn-data";
import "./join-makers-turn.css";

const JoinMakersTurn = () => {
    return (
        <div id="join-makers-turn">
            <div className="join-makers-turn-cont">
                <p className="jmtc-title">
                    Why Makers Turn ?
                </p>
                <div className="jmtc-description-cont">
                    <span className="jmtc-dc-line1 jmtc-dc-line">
                        {descriptionDetails.line1}
                    </span>
                    <span className="jmtc-dc-line2 jmtc-dc-line">
                        {descriptionDetails.line2}
                    </span>
                </div>
                <div className="jmtc-card-cont">
                    {
                        JoinMakersTurnData.map((item, index) => (
                            <JoinMakersTurnCard
                                key={index}
                                number={index + 1}
                                title={item.title}
                                imgScr={item.imgScr}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JoinMakersTurn;