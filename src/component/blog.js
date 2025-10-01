import "../styles/style.css";
import "../styles/blog.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { main, deleteBlog } from "../redux/actions/blogAction";
import { MdDelete,MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(main(page))
  }, [page]);
  const blogs = useSelector((state) => state.Blogs.blogs);
  const { t } = useTranslation();

  const deletedBlog = (id) => {
    dispatch(deleteBlog(id)).then(() => {
      dispatch(main());
    });
  };
  const location = useLocation();
  return (
    <div className="blogArea">
      <h2 className="blogMainTitle font-bold mb-4">{t("Blog.title")}</h2>
      <div className="blogBox">
        {blogs&& blogs.data &&
          blogs.data.length > 0 &&
          blogs.data.map((blog, index) => {
            return (
              <div key={index} className="blogShape">
                <div className="single">
                  <Link className="blog-link" to={{pathname: `/showblog/${blog._id}`}}>
                    <div className="blogContentDisplay">
                      <div className="blogImage"><img src={blog.defaultImage} alt="image"/></div>
                      <div className="blogDescription">
                        <h3 className="title">{blog.title}</h3>
                        <p className="snippet" dangerouslySetInnerHTML={{ __html: blog.snippet }} ></p>
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
      <div className="paginationContainer">
        <div className="paginationContent">
          <button disabled={page === 1} onClick={() => setPage(page - 1)} className="paginationButton">
            <MdArrowBackIos />
          </button>

          <span>
            {t("Blog.page")} {page} {t("Blog.of")} {blogs.totalPages}
          </span>

          <button disabled={page === blogs.totalPages} onClick={() => setPage(page + 1)} className="paginationButton">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
