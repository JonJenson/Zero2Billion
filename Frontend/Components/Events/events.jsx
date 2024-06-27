
import EventsCard from "./events-card";
import { EventsData } from "../../../Data/events-data";
import "./events.css";

const Events = () => {
    const upcomingEvents = EventsData.filter(event => !event.completed);
    const pastEvents = EventsData.filter(event => event.completed);

    return (
        <section id="events">
            <div className="events-cont">
                <p className="events-title">
                    Events
                </p>
                <div className="events-category">
                    <div className="events-heading-container">
                        <div className="events-heading">
                            Upcoming Events
                            <div className="events-underline-side"></div>
                        </div>
                    </div>
                    <div className="events-card-cont">
                        {upcomingEvents.map((item, index) => (
                            <EventsCard
                                key={index}
                                number={index + 1}
                                imgSrc={item.imgSrc}
                                linkUrl={item.linkUrl}
                            />
                        ))}
                    </div>
                </div>
                <div className="events-category">
                    <div className="events-heading-container">
                        <div className="events-heading">
                            Past Events
                            <div className="events-underline-side"></div>
                        </div>
                    </div>
                    <div className="events-card-cont">
                        {pastEvents.map((item, index) => (
                            <EventsCard
                                key={index}
                                number={index + 1}
                                imgSrc={item.imgSrc}
                                linkUrl={item.linkUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
