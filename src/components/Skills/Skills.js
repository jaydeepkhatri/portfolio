import { SiHtml5, SiCss3, SiJavascript, SiFirebase, SiGoogleanalytics, SiMysql, SiAdobexd } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";

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
            <h1 className="title" data-text="Skills">Skills</h1>
            <div className="language">
                <h2><span className="title">Languages</span></h2>
                <div className="group">
                    <div className="sec html">HTML5
                        <SiHtml5 />
                        <ul className="libs">
                            <li className="lib">Markdown</li>
                        </ul>
                    </div>
                    <div className="sec css">CSS3
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
                    <div className="sec js">JavaScript
                        <SiJavascript />
                        <ul className="libs">
                            <li className="lib">DOM</li>
                            <li className="lib">jQuery</li>
                            <li className="lib">NPM</li>
                            <li className="lib">Socket.io</li>
                        </ul>
                    </div>
                    <div className="sec sql">React.js
                        <FaReact />
                    </div>
                    <div className="sec php">NodeJs
                        <FaNodeJs />
                    </div>
                    

                </div>
            </div>
            <div className="tools">
                <h2><span className="title">Tools & Services</span></h2>
                <div className="group">
                    {tools.map((tool, i) => {
                        return <div className={tool.name + " sec"} key={i}>
                                {tool.name} <tool.icon />
                            </div>
                    })}
                    <ul className="sec seo">
                    SEO <AiOutlineAreaChart />
                        <ul className="libs">
                                <li className="lib">Schema</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;