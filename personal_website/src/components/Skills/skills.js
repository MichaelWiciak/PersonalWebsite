import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">What I do</span>
        <span className="skillDesc">LOREM impus lorem ipsum. Loren Inpus lorem lorem lorem impus.LOREM impus lorem ipsum. Loren Inpus lorem lorem lorem impus.LOREM impus lorem ipsum. Loren Inpus lorem lorem lorem impus.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UI Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>LOREM impus lorem ipsum. Loren Inpus lorem lorem lorem impus.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                <div className="skillBarText"> 
                    <h2>Web Design</h2>
                    <p>LOREM impus lorem ipsum. Loren Inpus lorem lorem lorem impus.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="App Design" className="skillBarImg" />
                <div className="skillBarText"> 
                    <h2>App Design</h2>
                    <p>LOREM impus lorem ipsum. Loren Inpus lorem lorem lorem impus.</p>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Skills