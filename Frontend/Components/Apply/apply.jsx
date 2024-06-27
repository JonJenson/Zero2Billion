import { useState } from "react";
import ApplyCard from "./apply-card";
import { ApplyData } from "../../../Data/apply-data";
import "./apply.css";

const Apply = () => {
    const [openCard, setOpenCard] = useState(null);

    const handleClickOpen = (number) => {
        setOpenCard(number);
    };

    const handleClickClose = () => {
        setOpenCard(null);
    };

    return (
        <section id="apply">
            <div className="apply-cont">
                <p className="ac-title">
                    Here You Can Apply
                </p>
                <div className="ac-card-cont">
                    {
                        ApplyData.map((item, index) => (
                            <ApplyCard
                                key={index}
                                number={index + 1}
                                title={item.title}
                                description={item.description}
                                formUrl={item.formUrl}
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

export default Apply;