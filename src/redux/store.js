import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from './reducers/blogReducer';
import ShowBlogeducer from './reducers/showBlogReducer';

const store = configureStore({ 
    reducer: {
         Blogs : BlogReducer,
         Blog :  ShowBlogeducer
        } 
})

export default store;