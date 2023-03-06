import { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';
import { gsap } from 'gsap/all';
import vartalap from '../../assets/img/vartalap.png';
import minifier from '../../assets/img/minifier.png';
import pixel from '../../assets/img/pixelart.png';
import mynotes from '../../assets/img/mynotes.png';
import themovies from '../../assets/img/themovies.png';
import weather from '../../assets/img/weather.jpg';
import collatz from '../../assets/img/collatz.png';
import webper from '../../assets/img/webper.png';
import './Projects.scss';

function Projects() {
  const projectdata = [
    {
      id: 1,
      img: weather,
      alt: 'Weather PWA',
      title: 'Weather',
      desc: 'PWA built with TypeScript & Tailwind.',
      url: 'https://alpines.netlify.app/',
      github: 'https://github.com/jaydeepkhatri/weather',
      tags: ['TypeScript', 'Tailwind']
    },
    {
      id: 2,
      img: webper,
      alt: 'Platform to test API"s',
      title: 'Webper',
      desc: 'Make GET & POST requests easily.',
      url: 'https://webper.netlify.app/',
      github: 'https://github.com/jaydeepkhatri/Webper',
      tags: ['React', 'Axios']
    },
    {
      id: 3,
      img: collatz,
      alt: 'Visualize the Collatz Conjecture',
      title: 'Collatz.',
      desc: 'Web App to visualize 3n + 1',
      url: 'https://3nplus1.netlify.app/',
      github: 'https://github.com/jaydeepkhatri/collatz-conjecture',
      tags: ['React']
    },
    {
      id: 4,
      img: themovies,
      alt: 'TheMovies',
      title: 'TheMovies',
      desc: 'Get the list of latest trending Movies',
      url: 'https://themovies1.netlify.app/',
      github: 'https://github.com/jaydeepkhatri/TheMovies',
      tags: ['React']
    },
    {
      id: 5,
      img: pixel,
      alt: 'Pixel Art',
      title: 'Pixel Art',
      desc: 'Create Custom Pixel Art',
      url: 'https://pixel-draw.netlify.app',
      github: 'https://github.com/jaydeepkhatri/pixel-art',
      tags: ['React', 'Canvas']
    },
    {
      id: 6,
      img: mynotes,
      alt: 'MyNotes',
      title: 'MyNotes',
      desc: 'Notes app built with MUI',
      url: 'https://note-notes.netlify.app/',
      github: 'https://github.com/jaydeepkhatri/MyNotes',
      tags: ['React', 'MUI']
    },
    {
      id: 7,
      img: vartalap,
      alt: 'Vartalap',
      title: 'Vartalap',
      desc: 'Anonymous Chat built with Socket',
      url: '',
      github: 'https://github.com/jaydeepkhatri/Vartalap',
      tags: ['JS', 'Express', 'Socket']
    },
    {
      id: 8,
      img: minifier,
      alt: 'Minifier',
      title: 'Minifier',
      desc: 'Instantly Minify your CSS code',
      url: 'https://jaydeepkhatri.github.io/Minifier/',
      github: 'https://github.com/jaydeepkhatri/Minifier',
      tags: ['JS']
    }
  ];

  const projectRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(projectRef.current.children);
    cards.forEach((card, i) => {
      gsap.fromTo(card, {
        x: `${-100 + (i * 25)}px`,
        y: '-40px',
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        x: '0px',
        y: '0px',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          scrub: true,
          start: 'top 90%',
          end: 'center 50%'
        }
      });
    });
  }, []);

  return (
    <section className="section projects">
      <div className="container">
        <h1 className="title" data-text="My Projects">My Projects</h1>
        <div className="projectcontainer" ref={projectRef}>
          {
            projectdata.map((project, i) => {
              return (
                <div className="project" key={i}>
                  <img src={project.img} className="img" alt={project.alt} />
                  <div className="projecttitlecontainer">
                    <a href={project.url} className="projecttitle" target="_blank" rel="noreferrer" title={`Visit ${project.title} site`}>{project.title}</a>
                    <div>
                      {
                        project.github.length === 0 ? null : <a href={project.github} aria-label="Link to Github" target="_blank" rel="noreferrer" title={`Source code for ${project.title}`}><FaGithub /></a>
                      }
                      {
                        project.url.length === 0 ? null : <a href={project.url} aria-label="Project Preview Link" target="_blank" rel="noreferrer" title={`Preview for ${project.title}`}><AiOutlineLink /></a>
                      }
                    </div>
                  </div>
                  <p className="description">{project.desc}</p>
                  <div className="tags">
                    {
                      project.tags.map((tag, j) => {
                        return <span className="tag" key={j}>{tag}</span>;
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <p className="findmore">
          Find more on my
          <a href="https://github.com/jaydeepkhatri">Github</a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
