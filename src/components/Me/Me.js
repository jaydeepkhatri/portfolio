import profile from '../../assets/img/new_profile.jpg';
import { AiFillContacts } from 'react-icons/ai';
import aboutimg from "../../assets/img/about_bg.png";

const redirecttoContact = () => {
    const el = document.querySelector("#contact");
    el.scrollIntoView();
}

const Me = () => {


    return (
        <section className="section" id="view"  style={{backgroundImage: `url(${aboutimg})`}}>
            <div className="container">
                <div className="pic">
                    <img src={profile} alt="Jaydeep Khatri | Profile" />
                </div>
                <div className="desc">
                    <h2 className="title" data-text="About" data-aos="fade-up">About</h2>
                    <p>I am Jaydeep Khatri a Frontend Developer based in Gujarat, India. I have a strong understanding of web development technologies and a passion for creating intuitive and visually appealing user experiences. My expertise in HTML, CSS, JavaScript, React & Node.js allows me to develop responsive and mobile-friendly websites that enhance the user experience. I am Detail Oriented & have high proficiency in both autonomous and group projects, with a focus on website development.</p>
                    <button className="btn" onClick={() => redirecttoContact()}><AiFillContacts />Contact Me</button>
                </div>
            </div>
        </section>
    )
}

export default Me;