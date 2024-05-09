import "src/components/navbar/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";


export const Navbar = () => {

    const myProfile = {
        name: "Vanessa Arruda",
        jobTitle: "Fullstack Developer",
        mainSkills: "JavaScript | React | Node JS | Python",
        logo: "src/assets/my-logos/VA-logo-color.png",
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
        <div>
            <IconContext.Provider value={{ color: "#000000", size: "25px" }}>
                <div className="nav-icons">
                    <a href="mailto: adm.vanessasouza@gmail.com"><AiOutlineMail /></a>
                    <a href="https://github.com/vanessa-arruda/" rel='noreferrer' target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/arrudavanessa/" rel='noreferrer' target="_blank"><FaLinkedin /></a>
                </div>
            </IconContext.Provider>
        </div>
    </>
  )
}
