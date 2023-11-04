  import { TechSkills } from "./components/TechSkills"
  import { Header } from "./components/Header"
  import { Project } from "./components/Project"

  export const App = () => {

    const projectsList = [
      {
        name:"Project Survey", 
        id:1, 
        skills:["HTML", "CSS", "JavaScript", "React"],
        img: "./public/projects-ss/project-survey.jpeg",
        demo_link: "https://darling-unicorn-fd946d.netlify.app",
        repository_link: "https://github.com/vanessa-arruda/project-survey",
        description: "A questionaire project using React state and controlled forms by making a Typeform-like product.",
      },
      {
        name:"Project Music Releases", 
        id:2, 
        skills:["HTML", "CSS", "JavaScript", "React", "API"],
        img: "./public/projects-ss/project-music-release.jpeg",
        demo_link: "https://celebrated-puppy-3c3a5d.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-music-releases-vite",
        description: "A project using React and creating components that used data from Spotify. It shows new albums and single releases."
      },
      {
        name:"Project Weather App", 
        id:3, 
        skills:["HTML", "CSS", "JavaScript", "API"],
        img: "./public/projects-ss/project-weather-app.jpeg",
        demo_link: "https://lively-gecko-369536.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-weather-app",
        description: "Built a Weather App using specific design from Figma and fetching Weather API data to manipulate and display multiple information to the user.",
      },
      {
        name:"Project Card Collection", 
        id:4, 
        skills:["HTML", "CSS", "JavaScript", "API"],
        img: "./public/projects-ss/project-sort-list.jpeg",
        demo_link: "https://app.netlify.com/sites/dancing-pixie-e86b2b/",
        repository_link: "https://github.com/vanessa-arruda/project-library",
        description: "Built a digital library, using an array of data collection of Pokemon, allowing user to search, sort and filter the cards displayed."
      }
    ];

    return (
        <>
            <Header/>
            <TechSkills/>
            <Project data={projectsList}/>
        </>
    )
  }
