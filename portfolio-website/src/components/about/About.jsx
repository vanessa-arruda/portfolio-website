
import "src/components/about/about.css"

export const About = () => {

    const aboutMeText = `
    I'm a Fullstack Developer bringing creativity and passion to the world of 
    Web development. I started as a self-taught developer in 2023 and found complete
    passion in creating new solutions, and working in each project I've done so far. This passion led me to gain
    a scholarship for a Bootcamp course at Technigo in JavaScript & React. During this time I also studied the IBM
    Frontend Web Development course for 3 months, graduating in both courses with maximum grade level.
    Now enrolled in an Advanced IT course in Backend with Python, I'm excited to contribute to innovative projects and create meaningful 
    digital experiences, using all the recent technologies.`;

    return (
        <header className="header-main-container" id="about-me">
            <div className="header-top-profile-container">
                <div className="header-photo-container">
                    <img src="/images/myphoto-whitebg.png" className="header-photo" alt="Vanessa's photo"/>
                </div>
            </div>
            <div className="about-text-container">
                <h2>About me</h2>
                <p>{aboutMeText}</p>
                <div className="animation-container"></div>
            </div>
        </header>
    )
};