
export const Portfolio = () => {

    const portfolioShowcase = `I have decided to create this portfolio to showcase my recent projects, 
    the technologies I am working with and as an additional challange I made this entire portfolio using 
    part of what I've learned so far. It is built entirely in JavaScript/React and I will add animations using 
    CSS and Framer motion library, best practices and new learns. So it will be constantly improving!
    I hope you like what you see - the repository to check the code is below!`

    const repoUrl = "https://github.com/vanessa-arruda/portfolio-website";

    return (
        <div className="portfolio-section-container">
            <div className="portfolio-section-sub-container">
                <h3>About this Portfolio</h3>
                <p>{portfolioShowcase}</p>
                <a target="_blank" href={repoUrl}><button className="portfolio-repo-btn" formTarget="_blank">View the code</button></a>
            </div>
        </div>
    )
}