import "../styles/style.css";
import blogtech from "../assets/img/blogtech.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="site-title">
        <a href="">
          <img className="navImg" src={blogtech} />
        </a>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">New Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
