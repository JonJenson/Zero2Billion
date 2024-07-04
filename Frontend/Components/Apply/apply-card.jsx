import React from "react";
import imgScr from "../../../Data/Images/redirect-arrow.png";
import { Link } from "react-router-dom";

const ApplyCard = ({
    number,
    title,
    formUrl,
    description,
    doubleLine,
    submitText,
    isOpen,
    handleClickOpen,
    handleClickClose
}) => {
    return (
        <div className={`ac-cc-card ac-cc-card-${number} ${isOpen ? "open" : ""}`}>
            <div className="ac-cc-card-cont">
                <p 
                    className={`ac-cc-cc-title ${doubleLine ? "double-line" : ""}`}
                    onClick={isOpen ? handleClickClose : null}
                    title={isOpen ? "Close" : ""}
                >
                    {title}
                </p>
                <p className="ac-cc-cc-describe">
                    {description}
                </p>
                <div 
                    className="ac-cc-cc-button"
                    onClick={() => handleClickOpen(number)}
                    title="Apply Now"
                >
                    <img src={imgScr} alt="Apply Now" />
                </div>
                <Link
                    to={formUrl}
                    className="ac-cc-cc-submit-button"
                    title="Submit Now"
                >
                    {submitText}
                </Link>
            </div>
        </div>
    );
};

export default ApplyCard;