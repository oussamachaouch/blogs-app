import { GET_BLOGS } from "../constant";
import axios from 'axios';

export const getBlogs = (data) => {
    return {
        type : 'GET_BLOGS',
        payload : data,
    }
}

export const main = () => {
    return async (dispatch) => { 
        return await axios.get('http://localhost:3000/blogs').then(
            (res) => {
                dispatch(getBlogs(res.data));
            }
        )
        
    }
}