import React from 'react';
import SainCard from './sain-card';
import { headingDetails, sainData } from '../../../Data/sain-data';
import './sain.css';

const Sain = () => {
    return (
        <div className="sain-container">
            <div className="header">
                <div className="header-text">
                    <h1>{headingDetails.heading}</h1>
                    <div className="underline"></div>
                    <h2>{headingDetails.tagline}</h2>
                    <p>{headingDetails.headingDescription}</p>
                </div>
                <div className="header-image">
                    <img src={headingDetails.bgImg} alt="Team hands" />
                </div>
            </div>
            <div className="sain-content">
                {sainData.map((item, index) => (
                    <SainCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        buttonText="Join Now  >>"
                        borderColor={item.borderColor}
                        imgSrc={item.imgSrc}
                        joinUrl={item.joinUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sain;
