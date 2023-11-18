import '../styles/showBlog.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getBlogById } from '../redux/actions/showBlogAction';

const ShowBlog = ({id}) => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.Blog.blog);
  useEffect(()=>{
    dispatch(getBlogById(id));
  },[]);
  return (
    <>
    {blog ?
      <div className='showBlogContainer'>
        <div className='titleDiv'>
          <h1>
            {blog.title}
          </h1>
        </div>
        <div className='bodyDiv'>
          {blog.body}
        </div>
      </div>
     :
      <div> nothing found </div>
     }
    </>
  );
};

export default ShowBlog;
