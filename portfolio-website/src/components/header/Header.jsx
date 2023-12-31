import linkedIn from "../../../public/icons/linkedin.svg";
import gitHub from "../../../public/icons/github.svg";
import stackOverFlow from "../../../public/icons/stack-overflow.svg";
import "../header/header.css"

export const Header = () => {

    const name = "Vanessa Arruda";
    const jobTitle = "Front-End Developer";
    const mainJobSkill = "+ JavaScript | React | Node JS";
    const aboutMeText = `
    I'm a Front-End Developer bringing a unique perspective to the world of 
    Web development. With strong sales background, I've sharpened communication 
    problem-solving/solution-oriented skills, team working and leadership, 
    which I now seamlessly integrate into my tech journey.
    With focus in acquiring a strong foundation in my tech skills, 
    I'm excited to contribute to innovative projects and create meaningful 
    digital experiences.`;

    return (
        <header className="header-main-container">
            <div className="header-top-profile-container">
                <div className="header-photo-container">
                    <img src="/images/photo-vanessa.jpeg" className="header-photo" alt="Vanessa's photo"/>
                </div>
                <div className="header-stack-container">
                    <h2 className="name">{name}</h2>
                    <h1 className="job-title">{jobTitle}</h1>
                    <h3 className="job-skills">{mainJobSkill}</h3>
                </div>
            </div>
            <div className="header-paragraph-container">
                <p>{aboutMeText}</p>
                <div className="animation-container"></div>
            </div>
            <div className="header-icons">
                <a target="_blank" href="https://www.linkedin.com/in/arrudavanessa/"><img src={linkedIn} alt="LinkedIn logo" width="30px"/></a>
                <a target="_blank" href="https://github.com/vanessa-arruda/"><img src={gitHub} alt="GitHub logo" width="30px"/></a>
                <a target="_blank" href="https://stackoverflow.com/users/13029438/vanessa-arruda"><img src={stackOverFlow} alt="Stack Overflow logo" width="30px"/></a>
            </div>
        </header>
    )
};