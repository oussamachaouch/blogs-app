import BlogReducer from './reducers/blogReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: { Blog : BlogReducer } })

export default store;