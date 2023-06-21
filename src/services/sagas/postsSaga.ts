import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery, SelectEffect, PutEffect } from 'redux-saga/effects'
import { Post } from '../../utils/types'
import {
  getPostsFailure,
  getPostsFetch,
  getPostsSuccess,
} from '../slices/postsSlices'

import { fetchPostsAction } from '../actions/fetchPostsAction'

export function* workGetPostsFetch(
  action: PayloadAction<{ page: number; limit: number }>
): Generator<
  SelectEffect | PutEffect | Promise<Response>,
  void,
  Response & Post[]
> {
  const { page, limit } = action.payload

  yield put(getPostsFetch())

  try {
    const response: Response = yield fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )

    if (!response.ok) {
      throw new Error('Ошибка запроса')
    }

    const payload: Post[] = yield response.json()

    yield put(getPostsSuccess(payload))
  } catch (error) {
    yield put(getPostsFailure())
  }
}

function* postsSaga() {
  yield takeEvery(fetchPostsAction.type, workGetPostsFetch)
}

export default postsSaga
