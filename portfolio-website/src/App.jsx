import { TechSkills } from "@/components/techskills/TechSkills"
import { About } from "@/components/about/About"
import { Project } from "@/components/projects/Project"
import { Footer } from "@/components/footer/Footer"
import { Navbar } from "@/components/navbar/Navbar"
import "@/app.css"

export const App = () => {

  return (
    <div className='main-top-container'>
      <nav className='left-container'>
        <Navbar/>
      </nav>
      <main className='right-container'>
        <About/>
        <TechSkills/>
        {/* <Portfolio/> */}
        <Project/>
        <Footer/>
      </main>
    </div>
  )
}
