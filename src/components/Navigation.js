import { Link } from "react-router-dom";
import navObj from "./NavigationData";

const Nav = () => {
  
  return (
    <nav id="navigation" className="content-wrapper nav-element">
      <div>
        <h1 id="yves" className="title">Yves Arthur</h1>
        <h3 id="freelancer" className="title sub-title">Freelancer Front-End Developer</h3>
      </div>
        
      <ul id="nav-right" className="nav-element">
        <li className="nav-list-right"><Link to="/">{navObj[0]}</Link></li>
        <li className="nav-list-right"><Link to="resume">{navObj[1]}</Link></li>
        <li className="nav-list-right"><Link to="/">{navObj[2]}</Link></li>
        <li className="nav-list-right"><Link to="/">{navObj[3]}</Link></li>
      </ul>
    </nav>
    
  )
}

export default Nav;