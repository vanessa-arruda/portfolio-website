import linkedIn from "../../../public/icons/linkedin.svg";
import gitHub from "../../../public/icons/github.svg";
import stackOverFlow from "../../../public/icons/stack-overflow.svg";
import "../header/header.css"

export const Header = () => {

    const name = "Vanessa Arruda";
    const jobTitle = "Fullstack Developer";
    const mainJobSkill = "JavaScript | React | Node JS | Python";
    const aboutMeText = `
    I'm a Fullstack Developer bringing creativity and passion to the world of 
    Web development. I started as a self-taught developer in 2023 and found complete
    passion in creating new solutions, and working in each project I've done so far. This passion led me to gain
    a scholarship for a Bootcamp course at Technigo in JavaScript & React. During this time I also studied the IBM
    Frontend Web Development course for 3 months, graduating in both courses with maximum grade level.
    Now enrolled in an Advanced IT course in Backend with Python, I'm excited to contribute to innovative projects and create meaningful 
    digital experiences, using all the recent technologies.`;

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