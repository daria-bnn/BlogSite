import { combineReducers } from 'redux'
import { postsReducer } from '../slices/postsSlices'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer
