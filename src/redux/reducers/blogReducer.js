import {
  GET_BLOGS,
  DELETE_BLOG_SUCCESS,
  CREATE_BLOG_SUCCESS,
} from "../constant";
const initialState = {
  blogs: [],
  deleteStatus: "",
  blog: {},
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case CREATE_BLOG_SUCCESS:
      return {
        ...state,
        blog: action.payload,
      };
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        deleteStatus: action.payload,
      };
    default:
      return initialState;
  }
};

export default BlogReducer;
