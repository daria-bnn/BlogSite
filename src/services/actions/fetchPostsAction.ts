import { createAction } from '@reduxjs/toolkit'

export interface FetchPostsPayload {
  page: number
  limit: number
}

export const fetchPostsAction = createAction<FetchPostsPayload>('FETCH_POSTS')
