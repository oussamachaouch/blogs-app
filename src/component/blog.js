import "../styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { main, deleteBlog } from "../redux/actions/blogAction";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(main());
  }, []);
  const blogs = useSelector((state) => state.Blog.blogs);
  const deletedBlog = (id) => {
    console.log(id);
    dispatch(deleteBlog(id));
  };
  return (
    <>
      <div className="content">
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog) => {
            return (
              <div className="blogShape">
                <div className="single">
                  <a href="">
                    <div className="blogContentDisplay">
                      <div className="blogImage"></div>
                      <div className="blogDescription">
                        <h3 className="title">{blog.title}</h3>
                        <p className="snippet">{blog.snippet}</p>
                        <h3 className="body">{blog.body}</h3>
                        <button onClick={deletedBlog(blog._id)}>
                          <i>Delete</i>
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blog;
