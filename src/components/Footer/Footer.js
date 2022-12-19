import { FiMail } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import jdk from '../../assets/img/jdk.svg';

const Footer = () => {
    return (
        <>
            <footer className="section contact" id="contact">
                <div className="contactgrid container">
                    <div className="formarea">
                        <form className="form" name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <h2 className="formtitle"><span className="title">Say Hello! 👋</span></h2>
                            <div className="form-group">
                                <label forhtml="name">Name</label>
                                <input type="text" id="name" className="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label forhtml="email">Email</label>
                                <input type="email" id="email" className="text" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label forhtml="message">Message</label>
                                <textarea className="message" rows="4" name="message" placeholder="Your Message" required></textarea>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                    <div className="details">
                        <div>
                            <h2>Email</h2>
                            <p>Find email from the Console Panel</p>
                            {
                                console.log("%c jaydeepkhatri79@gmail.com", "color: #F00; font-weight: 700; font-size: 2rem;")
                            }
                        </div>
                        <img src={jdk} className="jdk" alt="JD K" />
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