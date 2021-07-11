import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <>
            <section className="contact">
                <h2><span className="title">Contact Me</span></h2>
                <div className="contactgrid">
                    <div className="formarea">
                        <form className="form" aria-required>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="name">Name</label>
                                <input type="text" id="name" className="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group" data-aos="fade-up">
                                <label forhtml="email">Email</label>
                                <input type="email" id="email" className="text" placeholder="Your Email" />
                            </div>
                            <div className="form-group" data-aos="fade-up">
                                <label forHTML="message">Message</label>
                                <textarea className="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <input type="submit" value="Send" className="submit" data-aos="fade-up" />
                        </form>
                    </div>
                    <div className="details">
                        <a href="tel:+918347322110" data-aos="fade-left"><FontAwesomeIcon icon={faPhone} /> +91 83473 22110</a>
                        <a href="mailto:jaydeepkhatri79@gmail.com" data-aos="fade-left"><FontAwesomeIcon icon={faEnvelope} /> jaydeepkhatri79@gmail.com</a>
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