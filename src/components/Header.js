import bgimg from '../assets/img/img.png';

const Header = () => {
    return (
        <header className="header" id="header" style={{
            backgroundImage: `url("${bgimg}")`
        }} >
            <h1 data-aos="fade-up">Hello.<br /> I'm <span className="name">Jaydeep</span></h1>
            <p className="text">Frontend Developer & Designer, aiming Backend</p>
        </header>
    )
}

export default Header;