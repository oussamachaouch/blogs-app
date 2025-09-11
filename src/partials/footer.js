import "../styles/style.css";
import newsletterIcon from "../assets/img/newsletterIcon2.png";
import { FaSquareRss } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <div className="footer">
      <div className="footerDiv1">
        <div className="footerDiv2">
          Copyright &copy; Blogs  {currentYear} | All rights reserved
        </div>
        <div className="footerDiv3">
          <a href="/newsletter" tooltip="Subscribe to our Newsletter">
            {/* <img className="newsletterImg" src={newsletterIcon} /> */}
            <FaSquareRss className="footerDiv3Icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" tooltip="Facebook">
            <FaSquareFacebook className="footerDiv3Icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" tooltip="Instagram">
            <FaInstagram className="footerDiv3Icon" />
          </a>
          <a href="https://de.linkedin.com/in/oussama-chaouch-15a692128" target="_blank" rel="noopener noreferrer" tooltip="LinkedIn">
            <FaLinkedinIn className="footerDiv3Icon" />
          </a>
        </div>
      </div>
    </div>
  )
    
};

export default Footer;
