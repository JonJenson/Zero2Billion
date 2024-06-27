import React from "react";

import { Link } from "react-router-dom";
import { KnowData } from "../../../Data/know-data";
import "./know.css";

const Know = () => {
    return (
        <section id="know">
            <div 
                className="know-cont"
                style={{backgroundImage: `url(${KnowData.bgImgUrl})`}}
            >
                <p className="kc-title">
                    {KnowData.title}
                </p>
                <p className="kc-time">
                    {KnowData.time}
                </p>
                <Link 
                    to={KnowData.checkNowUrl}
                    className="kc-button"
                >
                    Check Now &nbsp; <i class="fa fa-angles-right"></i>
                </Link>
            </div>
        </section>
    )
};

export default Know;