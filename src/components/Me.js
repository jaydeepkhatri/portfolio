import profile from '../assets/img/jd_profile.jpg';
import resume from '../assets/pdf/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Me = () => {
    const social = [
        {
            icon: faFacebook,
            link: "https://www.facebook.com/jaydeepkhatri79/"
        },
        {
            icon: faTwitter,
            link: "https://twitter.com/jaydeepkhatri79"
        },
        {
            icon: faGithub,
            link: "https://github.com/jaydeepkhatri/"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/jaydeep-khatri/"
        }
    ];
    return (
        <section className="profile">
            <div className="foralignment">
                <div className="pic" data-aos="fade-up">
                    <img src={profile} alt="Jaydeep Khatri | Profile" />
                </div>
                <div className="desc">
                    <p data-aos="fade-up">Hello, I am <strong>Jaydeep Khatri</strong> graduated from SSIT, Ahmedabad.<br /><br /> A Frontend Developer aiming Backend who is obsessed with the idea of <strong>improving himself</strong> and wants a platform to <strong>grow</strong> & <strong>excel</strong>.</p>
                    <a href={resume} className="cv" data-aos="fade-up" download><FontAwesomeIcon icon={faFile} /> Download Resume</a>
                    <ul className="social">
                        {social.map((soc, i) => {
                            return <li className="sociallink" key={i} data-aos="fade-up" data-aos-delay={50 * (i + 1)}><a href={soc.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={soc.icon} /></a></li>
                        })}
                    </ul>
                    <div className="backgrd"></div>
                </div>
            </div>
        </section>
    )
}

export default Me;