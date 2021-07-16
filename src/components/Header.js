import HeaderImg from '../assets/img/Typing-bro.svg';

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="bigtext">
                <div>
                    <h1 data-aos="fade-up">Hello.<br /> I'm<br /> <span className="name">Jaydeep</span></h1>
                    <p className="text">Frontend Developer & Designer, aiming Backend</p>
                </div>
                <img src={HeaderImg} alt="Jaydeep Khatri" className="headerimg" data-aos="fade-left" />
            </div>
            <div className="circle" data-aos="fade-right">
                <span className="chota-circle"></span>
            </div>
        </header>
    )
}

export default Header;