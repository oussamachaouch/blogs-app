import '../styles/showBlog.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getBlogById } from '../redux/actions/showBlogAction';
import { useParams } from "react-router-dom"
import Header from '../partials/header';

const ShowBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBlogById(id));
  },[]);
  const blog = useSelector((state) => state.Blog.blog);
  return (
    <>
      <Header />
      {blog ?
        <div className='showBlogContainer'>
          <div className='titleDiv'>
            <h1>
              {blog.title}
            </h1>
          </div>
          <div className='imageDiv'>
            <img src={blog.blogImage} alt="image"/>
          </div>
          <div className='bodyDiv'>
            {blog.sections && blog.sections.map((section, index) => {
                return(
                  <div key={index}>
                    <h3 className='sectionTitle'><p className='sectionTitleP1'>{index+1}.</p><p className='sectionTitleP2'>{section.title}</p></h3>
                    <p className='sectionBody' dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                );
              })
            }
          </div>
        </div>
      :
        <div> nothing found </div>
      }
    </>
  );
};

export default ShowBlog;
