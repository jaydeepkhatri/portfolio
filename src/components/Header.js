import { faHome, faBook, faNetworkWired, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderImg from '../assets/img/Typing-bro.svg';

const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav-links">
                <a href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
                <a href="#"><FontAwesomeIcon icon={faBook} /> Education</a>
                <a href="#"><FontAwesomeIcon icon={faNetworkWired} /> Experience</a>
                <a href="#"><FontAwesomeIcon icon={faUser} /> Contact Me</a>
            </nav>
            <div className="bigtext">
                <div>
                    <h1 data-aos="fade-up">Hello,<br /> I'm<br /> <span className="name">Jaydeep</span></h1>
                    <p className="text">Frontend Developer & Designer, aiming Backend</p>
                </div>
                <img src={HeaderImg} className="headerimg" data-aos="fade-left" />
            </div>
            <div className="circle" data-aos="fade-right">
                <span className="chota-circle"></span>
            </div>
        </header>
    )
}

export default Header;