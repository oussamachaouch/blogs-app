import "../styles/style.css";
import blogtech from "../assets/img/blogtech.png";
import {A} from 'hookrouter';

const Nav = () => {
  return (
    <div className="nav">
      <div className="site-title">
        <a href="/">
          <img className="navImg" src={blogtech} />
        </a>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <A href="/">Blogs</A>
          </li>
          <li>
            <A href="/about">About</A>
          </li>
          <li>
            <A href="">New Blog</A>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
