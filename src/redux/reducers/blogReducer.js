import { GET_BLOGS } from "../constant";
const initialState = {
    blogs : [],
}

const BlogReducer = (state = initialState , action) => {
    switch(action.type){
        case 'GET_BLOGS' :
            return {
                ...state,
                blogs : action.payload
            }
        default : 
            return initialState;
    }
}

export default BlogReducer;