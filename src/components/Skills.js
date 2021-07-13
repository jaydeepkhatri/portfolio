import { faPhp, faHtml5, faCss3, faJs, faFigma, faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faFire, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mysql from '../assets/img/mysql.svg';
import adobexd from '../assets/img/adobexd.svg';


const Skills = () => {
    const tools = [
        {
            name: 'Adobe XD',
            classn: 'adobe',
            icon: adobexd
        },
        {
            name: 'Figma',
            classn: 'figma',
            icon: faFigma
        },
        {
            name: "Firebase",
            classn: 'firebase',
            icon: faFire
        },
        {
            name: "Google Analytics",
            classn: 'analytics',
            icon: faChartBar
        },
        {
            name: "PhpMyAdmin",
            classn: 'php',
            icon: faPhp
        }
    ];
    return (
        <section className="skills">
            <h1 className="skilltitle">Skills 💻</h1>
            <div className="language">
                <h2><span className="title">👉 Language</span></h2>
                <div className="group">
                    <div className="sec html">HTML5
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className="sec css">CSS3
                        <FontAwesomeIcon icon={faCss3} />
                        <ul className="libs">
                            <li className="lib">Bootstrap</li>
                            <li className="lib">Materialize</li>
                            <li className="lib">Preprocessor
                                <ul className="libs">
                                    <li className="lib">SCSS</li>
                                </ul>
                            </li>
                        </ul></div>
                    <div className="sec js">JavaScript
                        <FontAwesomeIcon icon={faJs} />
                        <ul className="libs">
                            <li className="lib">React</li>
                            <li className="lib">jQuery</li>
                            <li className="lib">D3.js</li>
                            <li className="lib">NPM
                                <ul className="libs">
                                    <li className="lib">Socket.io</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="sec php">PHP
                        <FontAwesomeIcon icon={faPhp} />
                    </div>
                    <div className="sec sql">SQL
                        <img src={mysql} />
                    </div>

                </div>
            </div>
            <div className="tools">
                <h2><span className="title">👉 Tools & Services</span></h2>
                <div className="group">
                    {tools.map((tool, i) => {
                        return <div className={tool.classn + " sec"} key={i}>
                            {tool.name} {tool.classn == "adobe" ? <img src={adobexd} /> : <FontAwesomeIcon icon={tool.icon} />}</div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;