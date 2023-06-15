import { FC, useMemo } from 'react'
import { Pagination } from 'react-bootstrap'

interface PaginationBarProps {
  postsPerPage: number
  totalPosts: number
  currentPage: number
}

const PaginationItems: FC<PaginationBarProps> = ({
  postsPerPage,
  totalPosts,
  currentPage,
}) => {
  const pageNumbers = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(totalPosts / postsPerPage) },
        (_, i) => i + 1
      ),
    []
  )

  return (
    <Pagination>
      {pageNumbers.map((page) => (
        <Pagination.Item key={page} active={page === currentPage}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
}

export default PaginationItems
