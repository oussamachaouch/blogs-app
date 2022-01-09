import "../styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { main, deleteBlog } from "../redux/actions/blogAction";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(main());
  }, []);
  const blogs = useSelector((state) => state.Blogs.blogs);

  const deletedBlog = (id) => {
    dispatch(deleteBlog(id))
    .then(()=>{
      dispatch(main());
    });
  };
  return (
    <>
      <div className="content">
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog, index) => {
            return (
              <div key={index} className="blogShape">
                <div className="single">
                  <a href={`/showblog/${blog._id}`}>
                    <div className="blogContentDisplay">
                      <div className="blogImage"></div>
                      <div className="blogDescription">
                        <h3 className="title">{blog.title}</h3>
                        <p className="snippet">{blog.snippet}</p>
                        {/* <h3 className="body">{blog.body}</h3> */}
                      </div>
                    </div>
                  </a>
                </div>
                <button
                  onClick={() => deletedBlog(blog._id)}
                  style={{
                    position: "relative",
                    float: "right",
                    marginRight: "33px",
                    marginTop: "-110px",
                  }}
                >
                  <i>Delete</i>
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blog;
