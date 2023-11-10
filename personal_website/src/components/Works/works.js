import React from 'react'
import './works.css'
import timetablex from '../../assets/timetablex.png'
import stanford from '../../assets/stanford.png'
import jackcompiler from '../../assets/jackcompiler.png'
import pgm from '../../assets/pgm.png'
import sportcentre from '../../assets/sportcentre.png'
import videoPlayer from '../../assets/videoPlayer.png'


const Works = () => {
  const redirectStanford = () => {
    window.location.href = "https://github.com/MichaelWiciak/Machine_Learning_by_Stanford_University_Programming_Exercises_Solutions";
  };
  const redirectTimetableX = () => {
    window.location.href = "https://timetablex.com";
  };
  const redirectSports = () => {
    window.location.href = "https://sports.feli.page/ ";
  };
  const redirectpgm = () => {
    window.location.href = "https://github.com/MichaelWiciak/PGMFileManipulatorUtility";
  };
  const redirectJack= () => {
    window.location.href = "https://github.com/MichaelWiciak/JACK_Compiler";
  };
  const redirectVideo = () => {
    window.location.href = "https://github.com/MichaelWiciak/VideoPlayer";
  };
  const redirectGitHub = () => {
    window.location.href = "https://github.com/MichaelWiciak?tab=repositories";
  };
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">These are screenshots of some of the projects I worked on. They will take you to an active deployment or if not available, to the GitHub repo where the code is available. </span>
        <div className="worksImages">
            <img src={timetablex} alt="" className="worksImg" onClick={redirectTimetableX}/>
            <img src={stanford}  alt="" className="worksImg" onClick={redirectStanford}/>
            <img src={sportcentre}  alt="" className="worksImg" onClick={redirectSports}/>
            <img src={videoPlayer}  alt="" className="worksImg" onClick={redirectVideo}/>
            <img src={pgm}  alt="" className="worksImg" onClick={redirectpgm}/>
            <img src={jackcompiler}  alt="" className="worksImg"  onClick={redirectJack}/>
        </div>
        <button className="worksBtn" onClick={redirectGitHub}>See More</button>
    </section>
  )
}

export default Works