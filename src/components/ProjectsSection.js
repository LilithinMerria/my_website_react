import projectObject from "./ProjectsData";
import myWebsiteReact from "../images/my_website_react.png";
import myWebsite from "../images/my_website.png";
import jaieWhy from "../images/jaiewhy.png";
import microsoft from "../images/microsoft.png";
import garden from "../images/garden.png";
import automobile from "../images/automobile.png";

const ProjectsSection = () => {

  return (
    <div>
      <section id="projects-section" className="content-wrapper">
        <h1 id="project-title">{projectObject.pageTitle}</h1>

          {/**Beginning of my projects */}
          <div id="first-project" className="project-flex">
            <p  id="project-one" className="resume-list project-circle">{projectObject.one.project}</p>
            <div className="project-description">
              <h4>{projectObject.one.title}</h4>
              <h5><a href={projectObject.one.github}>Git Link</a></h5>
              <p>{projectObject.one.paragraph}</p>
              <a href={projectObject.one.link} id="first-project-imageL" className="project-image-links">
                <img src={myWebsiteReact} id="first-project-image" className="project-image" alt="the first project"/>
              </a>
            </div>
          </div>

          <div id="second-project" className="project-flex">
            <p  id="project-two" className="resume-list project-circle">{projectObject.first.project}</p>
            <div className="project-description">
              <h4>{projectObject.first.title}</h4>
              <h5><a href={projectObject.first.github}>Git Link</a></h5>
              <p>{projectObject.first.paragraph}</p>
              <a href={projectObject.first.link} id="second-project-imageL" className="project-image-links">
                <img src={myWebsite} id="second-project-image" className="project-image" alt="the second project"/>
              </a>
            </div>
          </div>

          <div id="third-project" className="project-flex">
            <p  id="project-three" className="resume-list project-circle">{projectObject.second.project}</p>
            <div className="project-description">
              <h4>{projectObject.second.title}</h4>
              <h5><a href={projectObject.second.github}>Git Link</a></h5>
              <p>{projectObject.first.paragraph}</p>
              <a href={projectObject.first.link} id="third-project-imageL" className="project-image-links">
                <img src={jaieWhy} id="third-project-image" className="project-image" alt="the third project"/>
              </a>
            </div>
          </div>

          <div id="fourth-project" className="project-flex">
            <p  id="project-four" className="resume-list project-circle">{projectObject.third.project}</p>
            <div className="project-description">
              <h4>{projectObject.third.title}</h4>
              <h5><a href={projectObject.third.github}>Git Link</a></h5>
              <p>{projectObject.third.paragraph}</p>
              <a href={projectObject.third.link} id="fourth-project-imageL" className="project-image-links">
                <img src={microsoft} id="fourth-project-image" className="project-image" alt="the fourth project"/>
              </a>
            </div>
          </div>

          <div id="fifth-project" className="project-flex">
            <p  id="project-five" className="resume-list project-circle">{projectObject.fourth.project}</p>
            <div className="project-description">
              <h4>{projectObject.fourth.title}</h4>
              <h5><a href={projectObject.fourth.github}>Git Link</a></h5>
              <p>{projectObject.fourth.paragraph}</p>
              <a href={projectObject.fourth.link} id="third-project-imageL" className="project-image-links">
                <img src={garden} id="third-project-image" className="project-image" alt="the fifth project"/>
              </a>
            </div>
          </div>

          <div id="sixth-project" className="project-flex">
            <p  id="project-six" className="resume-list project-circle">{projectObject.fifth.project}</p>
            <div className="project-description">
              <h4>{projectObject.fifth.title}</h4>
              <h5><a href={projectObject.fifth.github}>Git Link</a></h5>
              <p>{projectObject.fifth.paragraph}</p>
              <a href={projectObject.fifth.link} id="third-project-imageL" className="project-image-links">
                <img src={automobile} id="third-project-image" className="project-image" alt="the fifth project"/>
              </a>
            </div>
          </div>
        
      </section>
    </div>
  )
}

export default ProjectsSection;