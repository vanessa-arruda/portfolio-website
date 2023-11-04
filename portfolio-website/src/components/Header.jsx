import linkedIn from "../../public/icons/linkedin.svg";
import gitHub from "../../public/icons/github.svg";
import stackOverFlow from "../../public/icons/stack-overflow.svg";
export const Header = () => {

    const name = "Vanessa Arruda";
    const jobTitle = "Front-End Developer";
    const mainJobSkill = "+ JavaScript | React | Node JS";
    const aboutMeText = `
    I'm a Front-End Developer bringing a unique perspective to the world of 
    Web development. With strong sales background, I've sharpened communication 
    problem-solving/solution-oriented skills, team working and leadership, 
    which I now seamlessly integrate into my tech journey.
    With a strong foundation in both tech and soft skills, 
    I'm excited to contribute to innovative projects and create meaningful 
    digital experiences.`;

    return (
        <div className="header-all-container">
            <div className="header-left-container">
                <div className="header-top-profile-container">
                    <div className="header-photo-container">
                        <img src="public/images/photo-vanessa.jpeg" className="header-photo" alt="Vanessa's photo"/>
                    </div>
                    <div className="header-stack-container">
                        <h2 className="name">{name}</h2>
                        <h1 className="job-title">{jobTitle}</h1>
                        <h3 className="job-skills">{mainJobSkill}</h3>
                    </div>
                </div>
                <div className="header-paragraph-container">
                    <p>{aboutMeText}</p>
                </div>
                <div className="header-icons">
                        <a target="_blank" href="https://www.linkedin.com/in/arrudavanessa/"><img src={linkedIn} alt="LinkedIn logo"/></a>
                        <a target="_blank" href="https://github.com/vanessa-arruda/"><img src={gitHub} alt="GitHub logo"/></a>
                        <a target="_blank" href="https://stackoverflow.com/users/13029438/vanessa-arruda"><img src={stackOverFlow} alt="Stack Overflow logo"/></a>
                </div>
            </div>
            <div className="header-right-container"></div>
        </div>
    )
};