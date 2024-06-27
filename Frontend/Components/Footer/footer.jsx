
import imgScr from "../../../Data/Images/logo.png";
import { Link } from "react-router-dom";
import { SocialMediaData } from "../../../Data/social-media";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-cont">
        <div className="fc-img-sec">
          <div className="fc-is-img-cont">
            <img src={imgScr} alt="" />
          </div>
          <div className="fc-is-text-cont">
            <p>Fostering Sustainable Progress for </p>
            <p>Individuals, Institutions, and Industries! </p>
          </div>
        </div>
        <div className="fc-links-sec">
          <div className="fc-ls-page-links">
            <ul className="fc-ls-scroll-highlight-links">
              <li className="fc-ls-shl-item">
                <a href="/#home">Home</a>
              </li>
              <li className="fc-ls-shl-item">
                <Link to="/about-z2b">About</Link>
              </li>
              <li className="fc-ls-shl-item">
                <a href="/#services">Services</a>
              </li>
              <li className="fc-ls-shl-item">
                <a href="/#centers">Centers</a>
              </li>
            </ul>
            <ul className="fc-ls-other-page-navigation-links">
              <li className="fc-ls-opnl-item">
                <Link to="/makers-turn">Makers Turn</Link>
              </li>
              <li className="fc-ls-opnl-item">
                <Link to="/events">Events</Link>
              </li>
              <li className="fc-ls-opnl-item">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="fc-ls-opnl-item">
                <Link to="/for-investment">For Investment</Link>
              </li>
              <li className="fc-ls-opnl-item">
                <Link to="/memes">
                  <b>Memes Arena</b>
                </Link>
              </li>
            </ul>
          </div>
          <div className="fc-ls-social-media-links">
            <p className="fc-ls-sml-title">Social</p>
            <a
              href={SocialMediaData.instagram.link}
              className="fc-ls-sml-instagram"
            >
              <img src={SocialMediaData.instagram.imgScr} alt="" />
            </a>
            <a
              href={SocialMediaData.linkedin.link}
              className="fc-ls-sml-linkedin"
            >
              <img src={SocialMediaData.linkedin.imgScr} alt="" />
            </a>
          </div>
          <div className="fc-ls-contact-details">
            <p className="fc-ls-cd-title">Contact Us</p>
            <p>Phone:</p>
            <p>
              <a href="tel:+91 8925745338">+91 8925745338</a>
            </p>
            <p>
              <a href="tel:+919840247628">+91 9840247628</a>
            </p>
            <p>
              <a href="tel:+918778936501">+91 8778936501</a>
            </p>
            <p>
              Address: Zero 2 Billion,Sipcot IT Park, Rajiv Gandhi Salai, OMR,
              beside TCS, Siruseri, Chennai, Tamil Nadu 603103
            </p>
            <p>
              Email:{" "}
              <a href="mailto:operations@zero2billion.in">
                Operations@zero2billion.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
