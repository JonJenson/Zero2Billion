import  { useState, useEffect, useCallback } from 'react';
import OurCoachesData from '../../../Data/ourcoaches-data';
import OurCoachesCard from "./ourcoachesCard";
import './ourcoaches.css';

const OurCoaches = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6);
    const [translateX, setTranslateX] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, endIndex));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleResize = useCallback(() => {
        let newCurrentIndex = currentIndex;
        let newEndIndex = 6;
        let basevalue = 10;
        let offset = 1160;

        if (window.innerWidth > 1249) {
            newCurrentIndex = (endIndex===13) ? Math.floor(currentIndex/2) : currentIndex;
            newEndIndex = 6;
            offset = 1160;
        } else if (window.innerWidth > 669 && window.innerWidth <= 1249) {
            newCurrentIndex = (endIndex===6) ? currentIndex*2 : currentIndex;
            newEndIndex = 13;
            offset = 580;
        } else if (window.innerWidth <= 669) {
            newCurrentIndex = (endIndex===6) ? currentIndex*2 : currentIndex;
            newEndIndex = 13;
            basevalue = 6;
            offset = 310;
        }

        console.log(newCurrentIndex, newEndIndex);
        setCurrentIndex(newCurrentIndex);
        setEndIndex(newEndIndex);
        setCurrentIndex((prevIndex) => Math.min(prevIndex, newEndIndex));
        setTranslateX(-(newCurrentIndex * offset - basevalue));
    }, [currentIndex]);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        let basevalue = 10;
        let offset = 1160;
        if (window.innerWidth > 1249) {
            offset = 1160;
        } else if (window.innerWidth > 669 && window.innerWidth <= 1249) {
            offset = 580;
        } else if (window.innerWidth <= 669) {
            basevalue = 6;
            offset = 310;
        }
        setTranslateX(-(currentIndex * offset - basevalue));
    }, [currentIndex]);

    return (
        <section id="our-coaches">
            <div className="our-coaches-cont">
                <p className="oc-title">
                    Our Coaches
                </p>
                <div className="oc-outer-wrapper">
                    <div
                        onClick={goToPrevSlide}
                        className={`oc-ow-prev-button ${currentIndex === 0 ? "oc-ow-prev-button-disabled" : ""}`}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="oc-card-cont carousel">
                        <div 
                            className="oc-cc-wrapper-cont"
                            style={{ transform: `translateX(${translateX}px)` }}    
                        >
                            {OurCoachesData.map((item, index) => (
                                <OurCoachesCard
                                    key={index}
                                    number={index + 1}
                                    imgsrc={item.imgsrc}
                                    name={item.name}
                                    designation={item.designation}
                                    company={item.company}
                                    email={item.email}
                                    linkedinURL={item.linkedinURL}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={goToNextSlide}
                        className={`oc-ow-next-button ${currentIndex >= endIndex ? "oc-ow-next-button-disabled" : ""}`}
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};  

export default OurCoaches;
