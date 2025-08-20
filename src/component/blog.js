import "../styles/style.css";
import "../styles/blog.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { main, deleteBlog } from "../redux/actions/blogAction";
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(main());
  }, []);
  const blogs = useSelector((state) => state.Blogs.blogs);

  const deletedBlog = (id) => {
    dispatch(deleteBlog(id)).then(() => {
      dispatch(main());
    });
  };
  const location = useLocation();
  return (
    <>
      <div className="content">
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog, index) => {
            return (
              <div key={index} className="blogShape">
                <div className="single">
                  <Link className="blog-link" to={{pathname: `/showblog/${blog._id}`}}>
                    <div className="blogContentDisplay">
                      <div className="blogImage"><img src={blog.defaultImage} alt="image"/></div>
                      <div className="blogDescription">
                        <h3 className="title">{blog.title}</h3>
                        <p className="snippet">{blog.snippet}</p>
                        {/* <h3 className="body">{blog.body}</h3> */}
                      </div>
                    </div>
                  </Link>
                </div>
                {location.pathname === "/admin" ? (
                  <button
                    onClick={() => deletedBlog(blog._id)}
                    style={{
                      position: "relative",
                      float: "right",
                      marginRight: "33px",
                      marginTop: "-110px",
                    }}
                    className="button"
                  >
                    <MdDelete />
                  </button>
                ) : null}

              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blog;
