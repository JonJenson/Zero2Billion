
import KickoffData from '../../../Data/kickoff-data';
import KickoffCard from './kickoff-card';
import './kickoff.css';

const Kickoff = () => {
    return (
        <div className="kickoff-wrapper">
            <div className="kickoff-heading">
                Kick Off Ventures
            </div>
            <div className="kickoff-container">
                {KickoffData.map((item, index) => (
                    <KickoffCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        linkedinURL={item.linkedinURL}
                        topcolor={item.topcolor}
                        imgsrc={item.imgsrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Kickoff;
