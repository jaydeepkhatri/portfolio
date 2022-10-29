import {FaGithub} from "react-icons/fa";
import findbank from "../../assets/img/findbank.png"
import vartalap from "../../assets/img/vartalap.png";
import minifier from "../../assets/img/minifier.png";
import pixel from "../../assets/img/pixelart.png"
import mynotes from "../../assets/img/mynotes.png";
import themovies from "../../assets/img/themovies.png"

const Projects = () => {
    const projectdata = [
        {
            id: "1",
            img: findbank,
            alt: "FindBank",
            title: "FindBank",
            desc: "",
            url: "https://findbankreact.herokuapp.com/",
            github: "https://github.com/jaydeepkhatri/Find-Bank",
            tags: ["React", "Axios"]
        },
        {
            id: "2",
            img: themovies,
            alt: "TheMovies",
            title: "TheMovies",
            desc: "",
            url: "https://themoviesdb.herokuapp.com/",
            github: "https://github.com/jaydeepkhatri/TheMovies",
            tags: ["React"]
        },
        {
            id: "3",
            img: pixel,
            alt: "Pixel Art",
            title: "Pixel Art",
            desc: "",
            url: "https://create-pixel-art.herokuapp.com/",
            github: "https://github.com/jaydeepkhatri/pixel-art",
            tags: ["React", "Canvas"]
        },
        {
            id: "4",
            img: mynotes,
            alt: "MyNotes",
            title: "MyNotes",
            desc: "",
            url: "https://mynotes-react.herokuapp.com/",
            github: "https://github.com/jaydeepkhatri/MyNotes",
            tags: ["React", "Material UI"]
        },
        {
            id: "5",
            img: vartalap,
            alt: "Vartalap",
            title: "Vartalap",
            desc: "",
            url: "https://vartalap-chat.herokuapp.com/",
            github: "https://github.com/jaydeepkhatri/Vartalap",
            tags: ["JS", "Express", "Socket"]
        },
        {
            id: "6",
            img: minifier,
            alt: "Minifier",
            title: "Minifier",
            desc: "",
            url: "https://jaydeepkhatri.github.io/Minifier/",
            github: "https://github.com/jaydeepkhatri/Minifier",
            tags: ["JS"]
        }
    ];
    
    return (
        <section className="section projects">
            <div className="container">
                <h1 className="title" data-text="My Projects">My Projects</h1>
                <div className="projectcontainer">
                    {
                        projectdata.map((project, i) => {
                            return <div className="project" key={i}>
                                <img src={project.img} className="img" alt={project.alt} />
                                <div className="projecttitlecontainer">
                                    <h2 className="projecttitle"><a href={project.url} target="_blank" rel="noreferrer" title={`Visit ${project.title} site`}>{project.title}</a></h2>
                                    <a href={project.github} title={`Source code for ${project.title}`}><FaGithub /></a>
                                </div>
                                <p className="description">{project.desc}</p>
                                <div className="tags">
                                    {
                                        project.tags.map((tag, i) => {
                                            return <span className="tag" key={i}>{tag}</span>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
                
        </section>
        
    )
    
}

export default Projects;