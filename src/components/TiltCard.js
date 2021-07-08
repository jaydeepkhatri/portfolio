import Tilt from 'react-tilt';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coverphoto from './img/coverphoto.jpg';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const TiltCard = () => {
    return (
        <div className="card-wrapper">
            <Tilt className="card" options={{ scale: 1 }}>
                <div className="coverimg" alt="Cover Photo" style={{
                    backgroundImage: `url("${coverphoto}")`
                }}>
                    <img src="./img/profile.jpg" alt="Jaydeep Khatri" className="card-image" />
                </div>
                <h2 className="title">Jaydeep Khatri</h2>
                <button className="contact">Contact Me</button>
                <ul className="social">
                    <li className="list-item facebook" title="Facebook">
                        <a href="#" className="link"><FontAwesomeIcon icon={faFacebook} /></a>
                    </li>
                    <li className="list-item twitter" title="Twitter">
                        <a href="" className="link"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li className="list-item instagram" title="Instagram">
                        <a href="#" className="link"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li className="list-item linkedin" title="LinkedIn">
                        <a href="#" className="link"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                </ul>
            </Tilt>
            <a href="#" className="btmarrow"><FontAwesomeIcon icon={faChevronDown} /> </a>
        </div>
    )
}
export default TiltCard;