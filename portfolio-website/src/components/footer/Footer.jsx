import "../footer/footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export const Footer = () => {
    

    return(
    <footer className="footer-container">
        <p>Simply designed in <p className="key-words">Figma</p> and coded in <p className="key-words">Visual Studio Code</p>. Built with <p className="key-words">React</p> framework and pure <p className="key-words">CSS</p> for styles and animations, deployed with <p className="key-words">Netlify</p>.</p>
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