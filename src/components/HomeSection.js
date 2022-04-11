import HomeSectionData from "./HomeSectionData";
import image from "../images/art.jpg";
import { Link } from "react-router-dom";

const HomeSection = () => {
  
  return (
    <section id="main-section" className="content-wrapper main-section">
      <div id="image">
        <img id="main-image" src={image} alt={HomeSectionData.alt}/>

      </div>

      <div id="about-me">
        <div>
          <h1 className="title">{HomeSectionData.title}</h1>
          <h3 id="about-me-title" className="title sub-title">{HomeSectionData.subTitle}</h3>
        </div>

        <div id="main-link">
          <Link to="/resume" className="resume-link"><p id="resumeP" className="resume-list">{HomeSectionData.resume}</p></Link>
          <Link to="/projects" className="resume-link"><p id="workP" className="resume-list">{HomeSectionData.work}</p></Link>
          <Link to="/resume" className="resume-link"><p id="skillsP" className="resume-list">{HomeSectionData.skills}</p></Link>
      </div>
      <p id="presentation">{HomeSectionData.presentation}</p>


      </div>

    </section>
  )
}

export default HomeSection;