import '../styles/style.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { main } from '../redux/actions/blogAction';

const Blog = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(main());
  },[]);
  const blogs = useSelector((state) => state.Blog.blogs);
  return (
    <>
    <div className="content">
    {(blogs && blogs.length > 0) &&
      blogs.map((blog)=>{
        return(
          <div className="blogShape">
            <div className="single">
              <a  href="">
                <div className="blogContentDisplay">
                  <div className="blogImage"></div>
                  <div className="blogDescription">
                    <h3 className="title">{blog.title}</h3>
                    <p className="snippet">
                      {blog.snippet}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }
    </div>
    </>
  );
};

export default Blog;
