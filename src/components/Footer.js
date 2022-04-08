import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import footerObj from "./FooterData";

const Footer = () => {

  return (
    <footer>
      <div className="content-wrapper">
        <ul id="footer-list">
          <div id="contact">CONTACT
            <div id="contact-list" className="contact-footer">
              <li className="footer-list">
                <i className="fas fa-phone">{footerObj.phone}</i>
              </li>

              <li className="footer-list">
                <i className="fas fa-envelope-open-text"><a href={footerObj.emailAddress}>{footerObj.emailMe}</a></i>
              </li>
            </div>
          </div>

          <div id="social-media">SOCIAL MEDIA
            <div id="social-media-icons" className="contact-footer">
              <li>
                <a href={footerObj.linkedin}>
                  <FontAwesomeIcon icon={faLinkedin} className="brand-icon"/>
                </a>
              </li>
              
              <li className="footer-list">
                <a href={footerObj.twitterAddress}><FontAwesomeIcon icon={faTwitter} className="brand-icon"/></a>
              </li>

              <li className="footer-list">
                <a href={footerObj.facebookAddress}><FontAwesomeIcon icon={faFacebook} className="brand-icon"/></a>
              </li>
            </div>

          </div>
          



        </ul>

        <div id="made-by">{footerObj.made}
        </div>

      </div>
    </footer>

  )
}

export default Footer;