import {
  GET_BLOGS,
  DELETE_BLOG_SUCCESS,
  CREATE_BLOG_SUCCESS,
} from "../constant";
import axios from "axios";
/**
 * get blog action
 * @param {*} data
 * @returns
 */
export const getBlogs = (data) => {
  return {
    type: GET_BLOGS,
    payload: data,
  };
};

export const main = () => {
  return async (dispatch) => {
    return await axios.get("http://localhost:3000/blogs").then(
      // appel ws
      (res) => {
        dispatch(getBlogs(res.data)); // dispatch action
      }
    );
  };
};

export const deleteBlogSuccess = (status) => {
  return {
    type: DELETE_BLOG_SUCCESS,
    payload: status,
  };
};

export const deleteBlog = (id) => {
  return async (dispatch) => {
    return await axios.delete(`http://localhost:3000/blogs/${id}`)
      .then((res) => {
        dispatch(deleteBlogSuccess(res.status));
      })
      .catch((err) => {
        return err;
      });
  };
};

export const createBlogSuccess = (data) => {
  return {
    type: CREATE_BLOG_SUCCESS,
    payload: data,
  };
};

export const createBlog = (data,navigate) => {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3000/blogs", data)
      .then((res) => {
        dispatch(createBlogSuccess(res));
        navigate("/", { replace: true }); // Navigate to home after creating blog
      })
      .catch((err) => {
        return err;
      });
  };
};
