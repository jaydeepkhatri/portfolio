import { SiHtml5, SiCss3, SiJavascript, SiFirebase, SiGoogleanalytics, SiAdobexd, SiExpress, SiTypescript } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineAreaChart, AiFillGithub } from "react-icons/ai";

const Skills = () => {
    const tools = [
        {
            name: 'Adobe XD',
            icon: SiAdobexd
        },
        {
            name: 'Figma',
            icon: CgFigma
        },
        {
            name: "Firebase",
            icon: SiFirebase
        },
        {
            name: "Google Analytics",
            icon: SiGoogleanalytics
        }
    ];
    return (
        <section className="section skills">
            <div className="container">
                <h1 className="title" data-text="Skills & Tools" data-aos="fade-up">Skills & Tools</h1>
                <div className="language">
                    <h2><span className="title">Languages</span></h2>
                    <div className="group">
                        <div className="sec html" data-aos="fade-up">HTML5
                            <SiHtml5 />
                            <ul className="libs">
                                <li className="lib">Markdown</li>
                            </ul>
                        </div>
                        <div className="sec css" data-aos="fade-up">CSS3
                            <SiCss3 />
                            <ul className="libs">
                                <li className="lib">Bootstrap</li>
                                <li className="lib">Material</li>
                                <li className="lib">Preprocessor
                                    <ul className="libs">
                                        <li className="lib">SCSS</li>
                                    </ul>
                                </li>
                            </ul></div>
                        <div className="sec js" data-aos="fade-up">JavaScript
                            <SiJavascript />
                            <ul className="libs">
                                <li className="lib">DOM</li>
                                <li className="lib">jQuery</li>
                                <li className="lib">NPM</li>
                                <li className="lib">Socket.io</li>
                            </ul>
                        </div>
                        <div className="sec ts" data-aos="fade-up">
                            TypeScript <SiTypescript />
                        </div>

                        <div className="sec react" data-aos="fade-up">React.js
                            <FaReact />
                        </div>
                        <div className="sec node" data-aos="fade-up">Node.js
                            <FaNodeJs />
                        </div>
                        <div className="sec express" data-aos="fade-up">Express.js
                            <SiExpress />
                        </div>

                    </div>
                </div>
                <div className="tools" style={{marginTop: "24px"}}>
                    <h2><span className="title">Tools & Services</span></h2>
                    <div className="group">
                        {tools.map((tool, i) => {
                            return <div className={tool.name + " sec"} key={i} data-aos="fade-up">
                                    {tool.name} <tool.icon />
                                </div>
                        })}
                        <div className="sec git" data-aos="fade-up">
                            Git (Version Control)<AiFillGithub />
                            <ul className="libs">
                                <li className="lib">Github</li>
                            </ul>
                        </div>
                        <div className="sec seo" data-aos="fade-up">
                        SEO <AiOutlineAreaChart />
                            <ul className="libs">
                                    <li className="lib">Schema</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;