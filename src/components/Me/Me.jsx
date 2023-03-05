import { AiFillContacts } from 'react-icons/ai';
import profile from '../../assets/img/new_profile.jpg';
import igimage from '../../assets/img/instagram_preview.jpg';
import aboutimg from '../../assets/img/about_bg.png';
import './Me.scss';

const redirecttoContact = () => {
  const el = document.querySelector('#contact');
  el.scrollIntoView();
};

function Me() {
  return (
    <section className="section" id="view" style={{ backgroundImage: `url(${aboutimg})` }}>
      <div className="container">
        <div className="pic">
          <img src={profile} alt="Jaydeep Khatri | Profile" data-aos="fade-up" />
        </div>
        <div className="desc">
          <h2 className="title" data-text="About" data-aos="fade-up">About</h2>
          <p>
            I am Jaydeep Khatri a Frontend Developer based in Gujarat, India.
            I have a strong understanding of web development technologies and a
            passion for creating intuitive and visually appealing user experiences.
            My expertise in HTML, CSS, JavaScript, React & Node.js allows me to develop
            responsive and mobile-friendly websites that enhance the user experience.
            I am Detail Oriented & have high proficiency in both autonomous and group
            projects, with a focus on website development.
          </p>
          <button className="btn" type="button" onClick={() => redirecttoContact()}>
            <AiFillContacts />
            Contact Me
          </button>
        </div>
      </div>

      {/* Code Architects */}
      <div className="container codearchitects">
        <div className="desc">
          <h2 className="title" data-text="About" data-aos="fade-up">Code Architects</h2>
          <p>
            Code Architects Instagram page - Created and managed a successful Instagram
            page with over 70K+ Followers and 12 Million+ views, offering tutorials and
            resources for aspiring web developers. Contributed to the creation and management
            of high-quality content as part of a team of experienced professionals.
          </p>
          <a href="https://instagram.com/code.architects" className="btn" target="_blank" rel="noreferrer">View Account</a>
        </div>
        <div className="pic">
          <img src={igimage} alt="Code Architects | Instagram" data-aos="fade-up" />
        </div>
      </div>
    </section>
  );
}

export default Me;
