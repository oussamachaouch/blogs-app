import axios from 'axios';
import { SHOW_BLOGS } from '../constant';


export const showBlogAction = (data) => {
    return {
        type: SHOW_BLOGS,
        payload: data
    }
}

export const getBlogById = (id) => {
    return async (dispatch) => {
        return await axios.get(`http://localhost:3000/blogs/${id}`)
        .then((res) => {
            dispatch(showBlogAction(res.data));
        })
    }
}

