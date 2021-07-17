import currencyconverter from '../assets/img/currencyconverter.png';
import eventmania from '../assets/img/eventmania.png';
import minifier from '../assets/img/minifier.png';
import twitterclone from '../assets/img/twitterclone.png';
import vartalap from '../assets/img/vartalap.png';
import whatshouldido from '../assets/img/whatshouldido.png';

const data = [
    {
        name: "Currency Converter",
        img: currencyconverter,
        lang: ['CSS', 'JS'],
        link: "https://github.com/jaydeepkhatri/Currency-Converter",
        desc: "Get most of currency exchange rate to compare, created with a API."
    },
    {
        name: "Minifier",
        img: minifier,
        lang: ['CSS', 'JS'],
        link: "https://github.com/jaydeepkhatri/Minifier",
        desc: "Minify the CSS code instantly with one click"
    },
    {
        name: "Vartalap",
        img: vartalap,
        lang: ['Express.js', 'Socket.io'],
        link: "https://github.com/jaydeepkhatri/Vartalap",
        desc: "Vartalap is a build in view of single page application (i.e. Not to refresh the page). Chat anonymously & no data is saved."
    },
    {
        name: "Twitter Clone",
        img: twitterclone,
        lang: ["PHP", "MySQL", "SCSS"],
        link: "#",
        desc: "Created a Twitter clone with PHP & SQL, It has features of create profile, create post, create poll, follow other people"
    },
    {
        name: "Event Mania",
        img: eventmania,
        lang: ["PHP", "MySQL", "SCSS"],
        link: "https://github.com/event-mania/Layout",
        desc: "Final Year project for GTU built with PHP & SQL. Features are Create event, Participate in event, Admin Panel, View listed Events"
    },
    {
        name: "What Should I do?",
        img: whatshouldido,
        lang: ["React", "JS", "API"],
        link: "https://github.com/jaydeepkhatri/What-should-I-do",
        desc: "A simple app based on API which shows different tasks you can do :)"
    }
]

const Projects = () => {
    return (
        <section className="projects">
            <h1 className="sectitle">Few of my Projects...</h1>
            {
                data.map((project, i) => {
                    console.log(project.lang);
                    return (<div className="project" key={i}>
                        {
                            ((i % 2) === 0) ?
                                <>
                                    <div className="imgblock right" data-aos="fade-up">
                                        <img src={project.img} className="img" alt={project.name} />
                                    </div>
                                    <div className="description" data-aos="fade-up" data-aos-delay="100">
                                        <h2 className="projtitle">{project.name}</h2>
                                        <p className="text">{project.desc}</p>
                                        <ul className="langs">
                                            {
                                                project.link === "#" ? null : <li className="lang"><a href={project.link} className="link">🔗 Link</a></li>
                                            }
                                            {
                                                project.lang.map((lg, i) => {
                                                    return <li className="lang" key={i}>{lg}</li>
                                                })}
                                        </ul>
                                    </div>
                                </>
                                : <>
                                    <div className="description" data-aos="fade-up" data-aos-delay="100">
                                        <h2 className="projtitle">{project.name}</h2>
                                        <p className="text">{project.desc}</p>
                                        <ul className="langs">
                                            {
                                                project.link === "#" ? null : <li className="lang"><a href={project.link} className="link">🔗 Link</a></li>
                                            }
                                            {project.lang.map((lg, i) => {
                                                return <li className="lang" key={i}>{lg}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="imgblock" data-aos="fade-up">
                                        <img src={project.img} className="img" alt={project.name} />
                                    </div>
                                </>
                        }
                    </div>
                    )
                })
            }
        </section>
    )
}

export default Projects;