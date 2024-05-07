import "src/components/navbar/navbar.css";
import linkedIn from "../../../public/icons/linkedin.svg";
import gitHub from "../../../public/icons/github.svg";
import stackOverFlow from "../../../public/icons/stack-overflow.svg";


export const Navbar = () => {

    const myProfile = {
        name: "Vanessa Arruda",
        jobTitle: "Fullstack Developer",
        mainSkills: "JavaScript | React | Node JS | Python",
        logo: "/my-logos/VA-logo-color.png",
    }

  return (
    <>
        <div className="header-nav-container">
            <img src={myProfile.logo} alt="logo Vanessa Arruda" className="logo"/>
            <div className="header-profile-container">
                <h2 className="name">{myProfile.name}</h2>
                <h1 className="job-title">{myProfile.jobTitle}</h1>
                <h3 className="job-skills">{myProfile.mainSkills}</h3>
            </div>
        </div>
        <nav className="navlinks-container">
            <a href="#about-me">About</a>
            <a href="#projects-title">Projects</a>
            <a href="#footer">Contact</a> 
            <a href="/CV-vanessa-arruda-2024.pdf"target="_blank" rel='noreferrer'>Download CV</a>
        </nav>
        <div className="nav-icons">
            <a target="_blank" href="https://www.linkedin.com/in/arrudavanessa/" rel='noreferrer'><img src={linkedIn} alt="LinkedIn logo"/></a>
            <a target="_blank" href="https://github.com/vanessa-arruda/" rel='noreferrer'><img src={gitHub} alt="GitHub logo"/></a>
            <a target="_blank" href="https://stackoverflow.com/users/13029438/vanessa-arruda" rel='noreferrer'><img src={stackOverFlow} alt="Stack Overflow logo"/></a>
        </div>
    </>
  )
}
