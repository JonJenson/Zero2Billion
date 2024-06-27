
import './roadmap.css';

const RoadMap = () => {
    const countries = [
        { name: 'India', flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png' },
        { name: 'Singapore', flagUrl: 'https://wallpapercave.com/wp/wp4214729.png' },
        { name: 'Malaysia', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2800px-Flag_of_Malaysia.svg.png' },
        { name: 'Middle East', flagUrl: 'https://www.flagsmore.com/wp-content/uploads/2021/04/ae-2048x1024.png' },
        { name: 'Australia', flagUrl: 'https://www.worldatlas.com/img/flag/au-flag.jpg' }
    ];

    return (
        <div className="wrapper">
            <h2 className="roadmap-heading">Road Map</h2>
            <div className="timeline-area">
                {countries.map((country, index) => (
                    <div key={index} className="single-item active">
                        <div className="country-name">{country.name}</div>
                        <span className="dot" data-country={country.name}></span>
                        <div className="img-area">
                            <img src={country.flagUrl} alt={country.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadMap;