import { FiMail } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import jdk from '../../assets/img/jdk.svg';

const Footer = () => {
    return (
        <>
            <footer className="contact">
                <div className="section">
                <div className="contactgrid">
                    <div className="formarea">
                        <form className="form" name="contact" action="/contact" method="POST" required>
                            <input type="hidden" name="form-name" value="contact" />
                            <h2 className="formtitle"><span className="title">Say Hello! 👋</span></h2>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="name">Name</label>
                                <input type="text" id="name" className="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="email">Email</label>
                                <input type="email" id="email" className="text" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="message">Message</label>
                                <textarea className="message" rows="4" name="message" placeholder="Your Message" required></textarea>
                            </div>
                            <input type="submit" value="Send" className="submit" data-aos="fade-up" />
                        </form>
                    </div>
                    <div className="details">
                        <div>
                            <h2>Email</h2>
                            <a href="mailto:jaydeepkhatri79@gmail.com" data-aos="fade-up"><FiMail /> jaydeepkhatri79@gmail.com</a>
                        </div>
                        <img src={jdk} className="jdk" alt="JDK" title="JD" />
                    </div>
                </div>
                </div>
            </footer>
            <div className="footer">
                Made with <AiFillHeart /> &amp; <FaCoffee /> by JD.
            </div>
        </>
    )
}

export default Footer;