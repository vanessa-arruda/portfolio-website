  import { TechSkills } from "./components/techskills/TechSkills"
  import { About } from "./components/about/About"
  import { Project } from "./components/projects/Project"
  import { Footer } from "./components/footer/Footer"
  import { Navbar } from "./components/navbar/Navbar"
  // import { Portfolio } from "./components/PortfolioSection"
  import "./app.css"
  // icons library
  import { IconContext } from "react-icons";
  import { FaToggleOff } from "react-icons/fa";
  import { FaToggleOn } from "react-icons/fa";

  export const App = () => {

    return (
      <>
        <div className='main-top-container'>
          <div className='left-container'>
            <Navbar/>
          </div>
          <main className='right-container'>
            <div className="theme-container">
              <p>light/dark</p>
              <IconContext.Provider value={{className: "light-btn"}}>
                <div><FaToggleOff/></div>
              </IconContext.Provider>
              <IconContext.Provider value={{className: "dark-btn"}}>
                <div><FaToggleOn/></div>
              </IconContext.Provider>
            </div>
            <About/>
            <TechSkills/>
            {/* <Portfolio/> */}
            <Project/>
            <Footer/>
          </main>
        </div>

      </>
    )
  }
