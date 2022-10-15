import profile from '../../assets/img/new_profile.jpg';
import resume from '../../assets/document/Jaydeep Khatri - Frontend Developer.pdf';
import { AiOutlineDownload } from 'react-icons/ai';



const Me = () => {
    
    return (
        <section className="section" id="view">
            <div className="foralignment">
                <div className="pic">
                    <img src={profile} alt="Jaydeep Khatri | Profile" />
                </div>
                <div className="desc">
                    <h2 class="title" data-text="About">About</h2>
                    <p>I am <span>Jaydeep Khatri</span>. I am a <span>Frontend Developer</span> based in Gujarat, India. I have over a year of Professional Experience working with Modern Web Technologies like <span>HTML5, CSS3, JavaScript, and React</span>. I am Detail Oriented & have high proficiency in both autonomous and group projects with a focus on website development & learn new skiils.</p>
                    <a href={resume} className="btn" download><AiOutlineDownload />Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Me;