import { SHOW_BLOGS } from '../constant';
const initialState = {
    blog : {},
}

const ShowBlogReducer = (state = initialState , action) => {
    switch(action.type){
        case SHOW_BLOGS : 
        return {
            ...state,
            blog : action.payload
        }
        default : 
        return initialState;
    }
}

export default ShowBlogReducer;