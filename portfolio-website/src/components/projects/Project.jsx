import "@/components/projects/project.css";
import ProjectCard from "@/components/projectCard/ProjectCard";
import recycleappimage from "@/assets/projects-ss/recycle-app.jpeg";
import moviemdbimage from "@/assets/projects-ss/project-movie-mdb.jpeg";
import surveyimage from "@/assets/projects-ss/project-survey.jpeg";
import musicreleaseimage from "@/assets/projects-ss/project-music-release.jpeg";
import weatherappimage from "@/assets/projects-ss/project-weather-app.jpeg";
import pokemoncardsimage from "@/assets/projects-ss/project-sort-list.jpeg";
import happythoughtsimage from "@/assets/projects-ss/project-happy-thoughts.jpeg";
import rpsgameimage from "@/assets/projects-ss/project-rock-paper-scissors.jpeg";

export const Project = () => {

  const projectsList = [
      {
        name:"Project Recycle App", 
        id:9, 
        skills:["HTML", "CSS", "JavaScript", "API", "React", "Redux"],
        img: recycleappimage,
        demo_link: "https://realcycle.netlify.app",
        repository_link: "https://github.com/vanessa-arruda/technigo-final-project",
        description: "Technigo Final project, done in pairs, using React and Redux. The objective was to create an app that would solve one of the 2030 Agenda to solve world's problems. The app/website is only a prototype, the brands are not real partners, having no compromisse or any relation with the website, as the program does not exist in reality having just learning purpose. The idea was an app where the users can accumulate points for each recycled items and challenges, that could be later on exchanged with partners per rewards.",
      },
      {
        name:"Project Movie (mDB API)", 
        id:8, 
        skills:["HTML", "CSS", "JavaScript", "API", "React"],
        img: moviemdbimage,
        demo_link: "https://project-mdbmovie.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-movies-vite",
        description: "A website project using React and working with mDB API different endpoints and properties. This project was done in pair-programming.",
      },
      {
        name:"Project Survey", 
        id:1, 
        skills:["HTML", "CSS", "JavaScript", "React"],
        img: surveyimage,
        demo_link: "https://darling-unicorn-fd946d.netlify.app",
        repository_link: "https://github.com/vanessa-arruda/project-survey",
        description: "A questionaire project using React state and controlled forms by making a Typeform-like product. This project was done in pair-programming.",
      },
      {
        name:"Project Music Releases", 
        id:2, 
        skills:["HTML", "CSS", "JavaScript", "React", "API"],
        img: musicreleaseimage,
        demo_link: "https://celebrated-puppy-3c3a5d.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-music-releases-vite",
        description: "A project using React and creating components that used data from Spotify. It shows new albums and single releases."
      },
      {
        name:"Project Weather App", 
        id:3, 
        skills:["HTML", "CSS", "JavaScript", "API", "Figma"],
        img: weatherappimage,
        demo_link: "https://lively-gecko-369536.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-weather-app",
        description: "Built a Weather App using specific design from Figma and fetching Weather API data to manipulate and display multiple information to the user.",
      },
      {
        name:"Project Card Collection", 
        id:4, 
        skills:["HTML", "CSS", "JavaScript", "API"],
        img: pokemoncardsimage,
        demo_link: "https://dancing-pixie-e86b2b.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-library",
        description: "Built a digital library, using an array of data collection of Pokemon, allowing user to search, sort and filter the cards displayed."
      },
      {
        name:"Project Happy Thoughts", 
        id:5, 
        skills:["HTML", "CSS", "JavaScript", "API", "React", "Node.js"],
        img: happythoughtsimage,
        demo_link: "https://stirring-pudding-ff101e.netlify.app/",
        repository_link: "https://github.com/vanessa-arruda/project-happy-thoughts-vite",
        description: "Project to post and get thoughts using API and React simulating a simple version of Social Media interaction."
      },
      {
        name:"Rock-Paper-Scissors Game", 
        id:7, 
        skills:["HTML", "CSS", "JavaScript"],
        img: rpsgameimage,
        demo_link: "https://vanessa-arruda.github.io/rock-paper-scissors/",
        repository_link: "https://github.com/vanessa-arruda/rock-paper-scissors",
        description: "Simple Rock, Paper, Scissors game to play against the computer, built using JavaScript and DOM manipulation."
      }
    ];
          // {
    //   name:"Fitness Landing Page", 
    //   id:6, 
    //   skills:["HTML", "CSS"],
    //   img: "@/assets/projects-ss/project-landing-page.jpeg",
    //   demo_link: "https://vanessa-arruda.github.io/fitness-landing-page/",
    //   repository_link: "https://github.com/vanessa-arruda/fitness-landing-page",
    //   description: "Quick and simple landing page project built only with HTML and CSS but using responsive design."
    // },
    return (
      <section className='project-section'>
        <h2 className='project-section-title page-titles' id='projects-title'>Featured Projects</h2>
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    );
  };