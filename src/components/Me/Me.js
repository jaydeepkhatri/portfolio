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
                    <h2 className="title" data-text="About">About</h2>
                    <p>I am <span>Jaydeep Khatri</span>. I am a <span>Frontend Developer</span> based in Gujarat, India. I have over a year of Professional Experience working with Modern Web Technologies like <span>HTML5, CSS3, JavaScript, and React</span>. I am Detail Oriented & have high proficiency in both autonomous and group projects with a focus on website development & learn new skiils.</p>
                    <button className="btn" onClick={() => redirecttoContact()}><AiFillContacts />Contact Me</button>
                </div>
            </div>
        </section>
    )
}

export default Me;