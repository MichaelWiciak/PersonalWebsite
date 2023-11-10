import React from 'react'
import './skills.css'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'
import programminglang from '../../assets/programminglang.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">About Me</span>
        <span className="skillDesc">Founder of TimetableX. Third-year undergraduate computer science with artificial intelligence student at the University of Leeds.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={programminglang} alt="UI Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Programming Languages</h2>
                    <p>Python, Bash, C, C++, Java, JavaScript, TypeScript</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={frontend} alt="Web Design" className="skillBarImg" />
                <div className="skillBarText"> 
                    <h2>Front-end Technologies</h2>
                    <p>HTML5, CSS3, React</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={backend} alt="App Design" className="skillBarImg" />
                <div className="skillBarText"> 
                    <h2>Back-end Technologies</h2>
                    <p>Databases: MySQL, PostgreSQL, SQLite. Server-Side Frameworks: Express.js, Django. APIs: REST. Authentication and Authorization: OAuth, JWT. Containers: Docker, Singularity. VM: Azure</p>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Skills