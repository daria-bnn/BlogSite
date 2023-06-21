import React, { FC, useCallback, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import PageTitle from '../components/atoms/PageTitle/PageTitle'
import PaginationItems from '../components/molecules/PaginationItems/PaginationItems'
import Loading from '../components/molecules/Loading/Loading'
import PostCard from '../components/organisms/PostCard/PostCard'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import WrapperPage from './WrapperPage/WrapperPage'
import ErrorBlock from '../components/molecules/ErrorBlock/ErrorBlock'
import { fetchPostsAction } from '../services/actions/fetchPostsAction'

const TOTAL_NUMBER_POSTS = 100
const LIMIT = 10

const PostsPage: FC = React.memo(() => {
  const { posts, isLoading, error } = useAppSelector((state) => state.posts)
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPostsAction({ page: currentPage, limit: LIMIT }))
  }, [dispatch, currentPage])

  const handleClickPage = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  return (
    <WrapperPage>
      <PageTitle title="Список постов" />
      {isLoading ? (
        <Loading />
      ) : (
        <Container className="p-0 mb-5">
          {error && <ErrorBlock />}

          <>
            {posts.map((post) => (
              <PostCard post={post} id={post.userId.toString()} />
            ))}
          </>
          {!error && (
            <PaginationItems
              currentPage={currentPage}
              onClick={handleClickPage}
              totalPosts={TOTAL_NUMBER_POSTS}
              postsPerPage={LIMIT}
            />
          )}
        </Container>
      )}
    </WrapperPage>
  )
})

export default PostsPage
