import "../styles/style.css";
import blogtech from "../assets/img/blogtech.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const location = window.location;
  return (
    <div className="nav">
      <div className="site-title">
        <a href="/">
          <img className="navImg" src={blogtech} />
        </a>
      </div>
      <nav className="navigation">
        <ul style={{marginTop: '18px'}}>
        {location.pathname === "/admin" ? (
          <>
            <li>
              <NavLink to="/admin" className={({ isActive }) => isActive ? "isActiveNav" : "text-black"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/newBlog" className={({ isActive }) => isActive ? "isActiveNav" : "text-black"}>
                New Blog
              </NavLink>
            </li>
          </>
        ) : 
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "isActiveNav" : "text-black"}>
              Home
            </NavLink>
          </li>}
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "isActiveNav" : "text-black"}>
            About
          </NavLink>
        </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
