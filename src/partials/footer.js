import "../styles/style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <div className="footer">
      <div className="footerDiv1">
        <div className="footerDiv2">
        Copyright &copy; Blogs  {currentYear} | All rights reserved
        </div>
      </div>
    </div>
  )
    
};

export default Footer;
