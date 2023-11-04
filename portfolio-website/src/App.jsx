  import { TechSkills } from "./components/TechSkills"
  import { Header } from "./components/Header"
  import { Project } from "./components/Project"

  export const App = () => {

    const myProjects = [
      {
        name:"Project Survey", 
        id:1, 
        skills:["HTML", "CSS", "JavaScript", "React"],
        img: "",
        demo_link: "",
        repository_link: "",
        description: "A project using React",
      },
      {
        name:"Project Music Releases", 
        id:2, 
        skills:["HTML", "CSS", "JavaScript", "React", "API"],
        img: "",
        demo_link: "",
        repository_link: ""
      },
      {
        name:"Project Weather App", 
        id:3, 
        skills:["HTML", "CSS", "JavaScript", "API"],
        img: "",
        demo_link: "",
        repository_link: ""
      },
    ]

    return (
        <>
            <Header/>
            <TechSkills/>
            <Project/>
        </>
    )
  }
