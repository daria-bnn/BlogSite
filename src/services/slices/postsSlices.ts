import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, Comment } from '../../utils/types'

export interface PostsInitialState {
  isLoading: boolean
  error: boolean
  posts: Post[]
  comments: Comment[]
}

export const postsInitialState: PostsInitialState = {
  isLoading: false,
  error: false,
  posts: [],
  comments: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.isLoading = false
      state.posts = action.payload
      state.error = false
    },
    getPostsFailure: (state) => {
      state.isLoading = false
      state.error = true
    },
  },
})

export const getPostsFetchWithParams = (params: {
  page: number
  limit: number
}) => ({
  type: 'posts/getPostsFetchWithParams',
  payload: params,
})

export const {
  getPostsSuccess,
  getPostsFetch,
  getPostsFailure,
} = postsSlice.actions

export const postsReducer = postsSlice.reducer
