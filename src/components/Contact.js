import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import jdk from '../assets/img/jdk.svg';

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="contactgrid">
                    <div className="formarea">
                        <form className="form" name="contact" data-netlify="true" required>
                            <h2 className="formtitle"><span className="title">Say Hello! 👋</span></h2>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="name">Name</label>
                                <input type="text" id="name" className="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="email">Email</label>
                                <input type="email" id="email" className="text" placeholder="Your Email" />
                            </div>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="message">Message</label>
                                <textarea className="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <input type="submit" value="Send" className="submit" data-aos="fade-up" />
                        </form>
                    </div>
                    <div className="details">
                        <h2>Email</h2>
                        <a href="mailto:jaydeepkhatri79@gmail.com" data-aos="fade-left"><FontAwesomeIcon icon={faEnvelope} /> jaydeepkhatri79@gmail.com</a>
                        <img src={jdk} className="jdk" alt="JDK" title="JD" />
                    </div>
                </div>
            </section>
            <footer className="footer">
                Made with <FontAwesomeIcon icon={faHeart} /> &amp; <FontAwesomeIcon icon={faCoffee} /> by JD.
            </footer>
        </>
    )
}

export default Contact;