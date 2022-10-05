import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';

const Header = () => {
    const social = [
        {
            icon: BsTwitter,
            link: "https://twitter.com/jaydeepkhatri79"
        },
        {
            icon: FaGithub,
            link: "https://github.com/jaydeepkhatri/"
        },
        {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/jaydeep-khatri/"
        }
    ];
    return (
        <header className="header">
            <h1 data-aos="fade-up">Jaydeep Khatri</h1>
            <p className="subtitle">Frontend Developer</p>
            <span className="bottomarrow" onClick={() => document.querySelector("#view").scrollIntoView()}>&#x2193;</span>
            <ul className="social">
                {social.map((soc, i) => {
                    return <li className="sociallink" key={i} data-aos="fade-up" data-aos-delay={50 * (i + 1)}><a href={soc.link} target="_blank" rel="noopener noreferrer"><soc.icon /></a></li>
                })}
            </ul>
        </header>
    )
}

export default Header;