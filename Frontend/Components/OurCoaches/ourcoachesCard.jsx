import React from "react";

const OurCoachesCard = ({
    number,
    imgsrc,
    name,
    designation,
    company,
    email,
    linkedinURL
}) => {
    return (
        <div className={`oc-cc-card oc-cc-card-${number}`}>
            <div className="oc-cc-card-cont">
                <div className="oc-cc-cc-image-cont">
                    <img src={imgsrc} alt="" />
                </div>
                <div className="oc-cc-cc-text-cont">
                    <div className="oc-cc-cc-tc-coach-detail-cont">
                        <p className="oc-cc-cc-tc-cdc-name">
                            {name}
                        </p>
                        <p className="oc-cc-cc-tc-cdc-designation">
                            {designation}
                        </p>
                        <p className="oc-cc-cc-tc-cdc-company">
                            {company}
                        </p>
                    </div>
                    <div className="oc-cc-cc-tc-social-media-handle-cont">
                        <p className="oc-cc-cc-tc-smhc-email">
                            <a href={`mailto:${email}`}>{email}</a>
                        </p>
                        <p className="oc-cc-cc-tc-smhc-linkedin">
                            <a href={linkedinURL} target="_blank" rel="noreferrer">LinkedIn</a>
                            <i class="fa-solid fa-angle-right"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurCoachesCard;
