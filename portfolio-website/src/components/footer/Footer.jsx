import "./footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export const Footer = () => {
    

    return(
    <footer className="footer-container" id="footer">
        <p>Simply designed in <span className="key-words">Figma</span> and coded in <span className="key-words">Visual Studio Code</span>. Built with <span className="key-words">React</span> framework and pure <span className="key-words">CSS</span> for styles and animations, deployed with <span className="key-words">Netlify</span>.</p>
        <p>Contact me</p>
        <div className="footer-icons">
            <a href="mailto: adm.vanessasouza@gmail.com"><AiOutlineMail /></a>
            <a href="https://github.com/vanessa-arruda/" rel='noreferrer' target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arrudavanessa/" rel='noreferrer' target="_blank"><FaLinkedin /></a>
        </div>
        <p>Vanessa Arruda - &#169; Copyright 2024</p>

    </footer>
    )
}