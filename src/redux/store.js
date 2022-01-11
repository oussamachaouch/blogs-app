import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import BlogReducer from "./reducers/blogReducer";
import ShowBlogeducer from "./reducers/showBlogReducer";

export const costumizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    Blogs: BlogReducer,
    Blog: ShowBlogeducer,
  },
  middleware: costumizedMiddleware,
});

export default store;
