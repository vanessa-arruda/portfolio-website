import "./techskills.css";
export const TechSkills = () => {

//showcase handle of objects in React/JSX    
// todo create class Skill to generate new ones here.
    const mySkills = [
        {skill:"HTML", style:"std-bg", skillLevel: 5, class: "skill-class"},
        {skill:"CSS", style:"std-bg", skillLevel: 4, class: "skill-class"},
        {skill:"Flexbox", style:"std-bg", skillLevel: 4, class: "skill-class"},
        {skill:"JavaScript", style:"main-bg", skillLevel: 4, class: "skill-class"},
        {skill:"React", style:"main-bg", skillLevel: 3, class: "skill-class"},
        {skill:"Redux", style:"std-bg", skillLevel: 2, class: "skill-class"},
        {skill:"Github", style:"std-bg", skillLevel: 4, class: "skill-class"},
        {skill:"API:s", style:"std-bg", skillLevel: 2, class: "skill-class"},
        {skill:"Git", style:"main-bg", skillLevel: 4, class: "skill-class"},
        {skill:"Figma", style:"std-bg", skillLevel: 4, class: "skill-class"},
        {skill:"Vite", style:"std-bg", skillLevel: 3, class: "skill-class"},
        {skill:"Node.js", style:"main-bg", skillLevel: 3, class: "skill-class"},
        {skill:"Python", style:"main-bg", skillLevel: 4, class: "skill-class"},
        {skill:"MongoDB", style:"main-bg", skillLevel: 3, class: "skill-class"},
        {skill:"MySQL", style:"main-bg", skillLevel: 3, class: "skill-class"} 
    ]
    // const getFillWidth = (skillLevel) => {
    //     return (skillLevel * 20) + "%";
    // }

    return (
        <section className="techSkills-container">
            <h2 className="techSkills-title">Tech Skills</h2>
            <div className="techSkills-list">
                {mySkills.map((skill) => (
                <span key={skill.skill} className={skill.class}>
                    <p>{skill.skill}</p>
                    {/* <div className="main-bar">
                        <div className="fill-bar" style={{ width: getFillWidth(skill.skillLevel) }}></div>
                    </div> */}
                </span>
                ))}
            </div>
        </section>
    )
};