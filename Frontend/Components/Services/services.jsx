import React, { useState, useEffect, useCallback } from "react";
import ServicesCard from "./services-card";
import { ServicesData } from "../../../Data/services-data";
import "./services.css";

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);
    const [translateX, setTranslateX] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, endIndex));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleResize = useCallback(() => {
        let newEndIndex = 4;
        let offset = 390;

        if (window.innerWidth >= 1280) {
            newEndIndex = 4;
        } else if (window.innerWidth >= 880 && window.innerWidth < 1280) {
            newEndIndex = 5;
        } else if (window.innerWidth >= 480 && window.innerWidth < 880) {
            newEndIndex = 6;
        } else if (window.innerWidth < 480) {
            newEndIndex = 6;
            offset = 340;
        }

        setEndIndex(newEndIndex);
        setCurrentIndex((prevIndex) => Math.min(prevIndex, newEndIndex));
        setTranslateX(-(currentIndex * offset + 5));
    }, [currentIndex]);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        const offset = window.innerWidth < 480 ? 340 : 390;
        setTranslateX(-(currentIndex * offset + 5));
    }, [currentIndex]);

    return (
        <section id="services">
            <div className="services-cont">
                <p className="sc-title">Our Services</p>
                <div className="sc-outer-wrapper">
                    <div
                        onClick={goToPrevSlide}
                        className={`sc-ow-prev-button ${currentIndex === 0 ? "sc-ow-prev-button-disabled" : ""}`}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="sc-card-cont carousel">
                        <div
                            className="sc-cc-wrapper-cont"
                            style={{ transform: `translateX(${translateX}px)` }}
                        >
                            {ServicesData.map((item, index) => (
                                <ServicesCard
                                    key={index}
                                    number={index + 1}
                                    title={item.title}
                                    points={item.points}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={goToNextSlide}
                        className={`sc-ow-next-button ${currentIndex >= endIndex ? "sc-ow-next-button-disabled" : ""}`}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;