import React from "react";
import { QuotesData } from "../../../Data/quotes";
import "./quotes.css";

const Quotes = () => {
    return (
        <section id="quotes">
            <div className="quotes-cont">
                <div className="qc-flex-cont">
                    <div className="qc-fc-border-left"></div>
                    <p className="qc-quote">{QuotesData.quote}</p>
                </div>
                <p className="qc-author">{QuotesData.author}</p>
                <p className="qc-description">{QuotesData.description}</p>
            </div>
        </section>
    )
};

export default Quotes;
