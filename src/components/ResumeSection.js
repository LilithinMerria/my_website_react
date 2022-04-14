import resumeObj from "./ResumeData";

const ResumeSection = () => {

  return (
    <section className="content-wrapper">
      <h1 id="resume-title">RESUME</h1>
      
      <div id="resume-grid">
        <div id="professional-and-skills">
          {/*<div id="professional-info" className="experience">
            <h4 id="resume-info" className="resume-list circle-margin">{resumeObj.professional.info}</h4>
            <p>{resumeObj.professional.infoP}</p>
  </div> */}

          <div id="work-experience" className="experience">
            <h4 id="work-experience-title" className="resume-list circle-margin">{resumeObj.workCircle.title}</h4>
            <div id="job">
              <div id="job1">
                <h4 className="work">{resumeObj.workCircle.job1.workTitle}</h4>
                <h5 className="work">{resumeObj.workCircle.job1.workYear}</h5>
              </div>

              <div id="job2" className="margin-top-resume">
                <h4 className="work">{resumeObj.workCircle.job2.workTitle}</h4>
                <h5 className="work">{resumeObj.workCircle.job2.workYear}</h5>
              </div>
            </div>
          </div>

          <div id="education" className="experience margin-top-resume">
            <h4 id="education-title" className="resume-list circle-margin">{resumeObj.education.title}</h4>
            <div id="all-education">
              <div id="university">
                <h4 className="work">{resumeObj.education.bachelor.university}</h4>
                <h5 className="work">{resumeObj.education.bachelor.bachelorYear}</h5>
              </div>

              <div id="high-school" className="margin-top-resume">
                <h4 className="work">{resumeObj.education.highSchool.degree}</h4>
                <h5 className="work">{resumeObj.education.highSchool.degreeYear}</h5>
              </div>
            </div>
          </div>

        </div>

        <div id="skills-and-languages">
        
          <div id="skills">
            <h4>{resumeObj.skills.title}</h4>
            <ul>
              <li>{resumeObj.skills.skillsTitle.python}</li>
              <li>{resumeObj.skills.skillsTitle.javascript}</li>
              <li>{resumeObj.skills.skillsTitle.css}</li>
              <li>{resumeObj.skills.skillsTitle.sql}</li>
              <li>{resumeObj.skills.skillsTitle.html}</li>
            </ul>
          </div>

          <div id="languages">
            <h4>{resumeObj.languages.title}</h4>
              <ul>
                <li>{resumeObj.languages.languageTitles.french}</li>
                <li>{resumeObj.languages.languageTitles.english}</li>
                <li>{resumeObj.languages.languageTitles.lingala}</li>
              </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ResumeSection;