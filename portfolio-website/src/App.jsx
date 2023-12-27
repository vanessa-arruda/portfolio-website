  import { TechSkills } from "./components/TechSkills"
  import { Header } from "./components/header/Header"
  import { Project } from "./components/Project"
  import { Footer } from "./components/footer/Footer"
  import { Portfolio } from "./components/PortfolioSection"

  export const App = () => {

    const projectsList = [
      {
        name:"Project Movie (mDB API)", 
        id:8, 
        skills:["HTML", "CSS", "JavaScript", "API", "React"],
        img: "/projects-ss/project-movie-mdb.jpeg",
        demo_link: "https://project-mdbmovie.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-movies-vite",
        description: "A website project using React and working with mDB API different endpoints and properties. This project was done in pair-programming.",
      },
      {
        name:"Project Survey", 
        id:1, 
        skills:["HTML", "CSS", "JavaScript", "React"],
        img: "/projects-ss/project-survey.jpeg",
        demo_link: "https://darling-unicorn-fd946d.netlify.app",
        repository_link: "https://github.com/vanessa-arruda/project-survey",
        description: "A questionaire project using React state and controlled forms by making a Typeform-like product. This project was done in pair-programming.",
      },
      {
        name:"Project Music Releases", 
        id:2, 
        skills:["HTML", "CSS", "JavaScript", "React", "API"],
        img: "/projects-ss/project-music-release.jpeg",
        demo_link: "https://celebrated-puppy-3c3a5d.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-music-releases-vite",
        description: "A project using React and creating components that used data from Spotify. It shows new albums and single releases."
      },
      {
        name:"Project Weather App", 
        id:3, 
        skills:["HTML", "CSS", "JavaScript", "API", "Figma"],
        img: "/projects-ss/project-weather-app.jpeg",
        demo_link: "https://lively-gecko-369536.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-weather-app",
        description: "Built a Weather App using specific design from Figma and fetching Weather API data to manipulate and display multiple information to the user.",
      },
      {
        name:"Project Card Collection", 
        id:4, 
        skills:["HTML", "CSS", "JavaScript", "API"],
        img: "/projects-ss/project-sort-list.jpeg",
        demo_link: "https://dancing-pixie-e86b2b.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-library",
        description: "Built a digital library, using an array of data collection of Pokemon, allowing user to search, sort and filter the cards displayed."
      },
      {
        name:"Project Happy Thoughts", 
        id:5, 
        skills:["HTML", "CSS", "JavaScript", "API", "React", "Node.js"],
        img: "/projects-ss/project-happy-thoughts.jpeg",
        demo_link: "https://stirring-pudding-ff101e.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-happy-thoughts-vite",
        description: "Project to post and get thoughts using API and React simulating a simple version of Social Media interaction."
      },
      {
        name:"Rock-Paper-Scissors Game", 
        id:7, 
        skills:["HTML", "CSS", "JavaScript"],
        img: "/projects-ss/project-rock-paper-scissors.jpeg",
        demo_link: "https://vanessa-arruda.github.io/rock-paper-scissors/",
        repository_link: "https://github.com/vanessa-arruda/rock-paper-scissors",
        description: "Simple Rock, Paper, Scissors game to play against the computer, built using JavaScript and DOM manipulation."
      }
    ];

    // {
    //   name:"Fitness Landing Page", 
    //   id:6, 
    //   skills:["HTML", "CSS"],
    //   img: "/projects-ss/project-landing-page.jpeg",
    //   demo_link: "https://vanessa-arruda.github.io/fitness-landing-page/",
    //   repository_link: "https://github.com/vanessa-arruda/fitness-landing-page",
    //   description: "Quick and simple landing page project built only with HTML and CSS but using responsive design."
    // },

    return (
        <>
            <Header/>
            <TechSkills/>
            <Portfolio/>
            <Project data={projectsList}/>
            <Footer/>
        </>
    )
  }
