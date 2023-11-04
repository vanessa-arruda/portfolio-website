export const TechSkills = () => {

//showcase handle of objects in React/JSX    

    const mySkills = [
        {skill:"HTML", style:"std-bg"},
        {skill:"CSS", style:"std-bg"},
        {skill:"Flexbox", style:"std-bg"},
        {skill:"JavaScript", style:"js-bg"},
        {skill:"ES6", style:"std-bg"},
        {skill:"JSX", style:"std-bg"},
        {skill:"React", style:"react-bg"},
        {skill:"React-Hooks", style:"std-bg"},
        {skill:"Redux", style:"std-bg"},
        {skill:"Github", style:"std-bg"},
        {skill:"Web Accessibly", style:"std-bg"},
        {skill:"API:s", style:"std-bg"},
        {skill:"Git", style:"git-bg"},
        {skill:"Mob-programming", style:"std-bg"},
        {skill:"Pair-programming", style:"std-bg"},
        {skill:"Figma", style:"std-bg"},
        {skill:"Vite", style:"std-bg"},
        {skill:"Node.js", style:"node-bg"}
    ];

    return (
        <div className="techSkills-container">
            <div className="techSkills-title"><h1>Tech</h1></div>
            <div className="techSkills-list">
                {mySkills.map((skill) => (
                <span key={skill.skill} className={skill.style}>{skill.skill}</span>
                ))}
            </div>
        </div>
    )
};