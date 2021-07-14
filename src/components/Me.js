import profile from '../assets/img/jd_profile.jpg';

const Me = () => {
    return (
        <section className="profile">
            <div className="foralignment">
                <div className="pic">
                    <img src={profile} alt="Jaydeep Khatri | Profile" />
                </div>
                <div className="desc">
                    Hello, I am <strong>Jaydeep Khatri</strong> graduated from SSIT, Ahmedabad.<br /><br /> A Frontend Developer aiming Backend who is obsessed with the idea of <strong>improving himself</strong> and wants a platform to <strong>grow</strong> & <strong>excel</strong>.
                </div>
            </div>
        </section>
    )
}

export default Me;