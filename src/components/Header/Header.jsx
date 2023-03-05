/* eslint-disable import/no-extraneous-dependencies */
import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import wave from '../../assets/img/wave.svg';
import './Header.scss';

const social = [
  {
    name: 'Twitter',
    icon: BsTwitter,
    link: 'https://twitter.com/jaydeepkhatri79'
  },
  {
    name: 'Github',
    icon: FaGithub,
    link: 'https://github.com/jaydeepkhatri/'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/jaydeep-khatri/'
  },
  {
    name: 'CodePen',
    icon: FaCodepen,
    link: 'https://codepen.io/jaydeepkhatri'
  }
];

function Header() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 0.3,
      autoAlpha: 1,
      ease: 'none',
      scale: 3,
      scrollTrigger: {
        trigger: imageRef.current,
        markers: true,
        start: '-150 45%',
        end: 'top',
        scrub: true
      }
    });
  }, []);

  return (
    <header className="header section">
      <div ref={headerRef} className="header-animate">
        <h1>Jaydeep Khatri</h1>
        <p className="subtitle">Frontend Engineer</p>
        <ul className="social">
          {
            social.map((soc, i) => {
              return (
                <li className="sociallink" key={i}>
                  <a href={soc.link} aria-label={soc.name} target="_blank" rel="noopener noreferrer"><soc.icon /></a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <img src={wave} ref={imageRef} className="wave" alt="" />
    </header>
  );
}

export default Header;
