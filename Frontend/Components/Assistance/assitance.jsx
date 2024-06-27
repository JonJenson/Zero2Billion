// assistance.jsx
import  { useState } from "react";
import AssistanceCard from "./assistance-card";
import { AssistanceData } from "../../../Data/assistance-data";
import "./assistance.css";

const Assistance = () => {
    const [openCard, setOpenCard] = useState(null);

    const handleClickOpen = (number) => {
        setOpenCard(number);
    };

    const handleClickClose = () => {
        setOpenCard(null);
    };

    return (
        <section id="assistance">
            <div className="assistance-cont">
                <p className="ac-title">
                    Here You Can Get Assistance
                </p>
                <div className="ac-card-cont">
                    {
                        AssistanceData.map((item, index) => (
                            <AssistanceCard
                                key={index}
                                number={index + 1}
                                title={item.title}
                                description={item.description}
                                doubleLine={item.doubleLine}
                                isOpen={openCard === index + 1}
                                handleClickOpen={() => handleClickOpen(index + 1)}
                                handleClickClose={handleClickClose}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Assistance;
