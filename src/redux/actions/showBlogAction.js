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
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/blogs/${id}`)
        .then((res) => {
            dispatch(showBlogAction(res.data));
        })
    }
}

