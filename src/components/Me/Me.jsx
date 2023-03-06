import { useEffect, useRef } from 'react';
import { AiFillContacts } from 'react-icons/ai';
import { gsap, ScrollTrigger } from 'gsap/all';
import profile from '../../assets/img/new_profile.jpg';
import igimage from '../../assets/img/instagram_preview.jpg';
import aboutimg from '../../assets/img/about_bg.png';
import './Me.scss';

const redirecttoContact = () => {
  const el = document.querySelector('#contact');
  el.scrollIntoView();
};

function Me() {
  const textRef = useRef(null);
  const codeArchRef = useRef(null);
  const imgRef1 = useRef(null);
  // const imgRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(textRef.current.children).forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        toggleClass: 'active',
        duration: 0.2
      });
    });

    gsap.utils.toArray(codeArchRef.current.children).forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        toggleClass: 'active',
        duration: 0.2
      });
    });

    gsap.fromTo(imgRef1.current, {
      x: '-100px',
      y: '-40px',
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      x: '0px',
      y: '0px',
      delay: 0.2,
      scrollTrigger: {
        trigger: imgRef1.current
      }
    });
  }, []);

  return (
    <section className="section" id="view" style={{ background: `url(${aboutimg}), linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.1), rgba(0,0,0,0))` }}>
      <div className="container">
        <div className="pic">
          <img src={profile} ref={imgRef1} alt="Jaydeep Khatri | Profile" />
        </div>
        <div className="desc">
          <h2 className="title" data-text="About">About</h2>
          <p className="text" ref={textRef}>
            Meet <span>Jaydeep Khatri</span>, the superhero Frontend Developer hailing from
            Gujarat, India. With a deep understanding of web development technologies, he creates
            <span>visually stunning</span> and <span>intuitive user experiences</span> that will
            make your grandma proud. His mastery of <span>HTML</span>, <span>CSS</span>,
            <span>JavaScript</span>, <span>React</span>, and Animation Packages allows him to
            develop websites that are both <span>responsive</span> and <span>mobile-friendly</span>,
            so you can browse the internet even when you&apos;re stuck in a crowded elevator.
            <br />
            <br />
            And don&apos;t even get us started on his <span>autonomous</span> and <span>group
              project skills</span>. Jaydeep is a natural-born leader who can work alone or with
            a team to <span>deliver the best results</span>. He&apos;s the kind of guy who will
            make your website look so good that your competitors will be begging for mercy. And yes,
            Jaydeep thinks he sounds even more amazing when he talks about himself in the
            third person. But who can blame him? <span>He&apos;s that good.</span>
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
          <h2 className="title" data-text="About">Code Architects</h2>
          <p className="text" ref={codeArchRef}>
            <span>Code Architects</span> Instagram page - Created and managed a successful Instagram
            page with over <span>75K+ Followers</span> and <span>15 Million+ views</span>, offering
            tutorials and resources for <span>aspiring web developers</span>. Contributed to the
            creation and management of <span>high-quality</span> content as Leader of a team of
            1 <span>experienced professional</span>.
          </p>
          <a href="https://instagram.com/code.architects" className="btn" target="_blank" rel="noreferrer">View Account</a>
        </div>
        <div className="pic">
          <img src={igimage} alt="Code Architects | Instagram" />
        </div>
      </div>
    </section>
  );
}

export default Me;
