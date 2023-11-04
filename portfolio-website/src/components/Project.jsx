export const Project = (projects) => {

    const projectTitle = "Featured Projects";
    const projectsData = projects.data.map((project) => (
        <div key={project.id} className="project-all-container">
            <div className="project-img-container">
                <img className="project-img" src={project.img} alt="project screenshot"/>
            </div>
            <div className="project-content-container">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-skills-container">
                    {project.skills.map((skill) => (
                        <span key={`${project.id}_${skill}`} className="project-skills">{skill}</span>
                    ))}
                </div>
                <div className="project-btns">
                    <a target="_blank" href={project.demo_link}><button className="demo-btn" formTarget="_blank">Live Demo</button></a>
                    <a target="_blank" href={project.repository_link}><button className="repo-btn" formTarget="_blank">View the code</button></a>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <div className="project-title-container"><h1>{projectTitle}</h1></div>
            <div>{projectsData}</div>
        </div>
    )
}