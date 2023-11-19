
export const Portfolio = () => {

    const portfolioP1 = `I have decided to create this portfolio to showcase my recent projects,
    the technologies I am working with and as an additional challenge I am setting up for myself. It is built entirely in JavaScript/React,
    with the focus of putting in practice new libraries / frameworks.`;

    const specialText = "/*I'm testing new things ALL THE TIME*/";
    const currentVersionComment = `Right now I am refactoring all CSS @media screen as I was testing some aspects about mobile first and 
    multiple screen sizes approach deeply. And improving the code in a scenario of scalability.`;

    const portfolioP2 = `But this is also my playground, for exercising best practices and new learns, so it will have sections being 
    refactored completely in order to achieve more efficiency or better results. Side effect: It will constantly improve! 
    I hope you like what you see - if you have suggestions, hit me in Social Media or via email.
    The repository to check the code is below!`

    const repoUrl = "https://github.com/vanessa-arruda/portfolio-website";

    return (
        <section className="portfolio-section-container">
            <div className="portfolio-section-sub-container">
                <h3>About this Portfolio</h3>
                <p>{portfolioP1}</p>
                <p className="special-text">{specialText}</p>
                <p className="version-text">{currentVersionComment}</p>
                <p>{portfolioP2}</p>
                <a target="_blank" href={repoUrl}><button className="portfolio-repo-btn" formTarget="_blank">View the code</button></a>
            </div>
        </section>
    )
}