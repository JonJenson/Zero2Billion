
import Logo from "../../../Data/Images/favicon-logo.png";
import "./not-found.css";

const NotFound = () => {
    return (
        <section id="not-found">
            <div className="not-found-cont">
                <div className="nfc-img-cont">
                    <img src={Logo} alt="" />
                </div>
                <div className="nfc-text-cont">
                    <p className="nfc-title">
                        404 Error! Page Not Found
                    </p>
                    <p className="nfc-description">
                        Sorry, the page you are looking for does not exist.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default NotFound;