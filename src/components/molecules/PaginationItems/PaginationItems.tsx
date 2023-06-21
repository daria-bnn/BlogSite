import React, { FC, useMemo } from 'react'
import { Pagination } from 'react-bootstrap'

interface PaginationBarProps {
  postsPerPage: number
  totalPosts: number
  onClick: (page: number) => void
  currentPage: number
}

const PaginationItems: FC<PaginationBarProps> = React.memo(
  ({ postsPerPage, totalPosts, onClick, currentPage }) => {
    const pageNumbers = useMemo(
      () =>
        Array.from(
          { length: Math.ceil(totalPosts / postsPerPage) },
          (_, i) => i + 1
        ),
      []
    )

    return (
      <Pagination className="mt-3">
        {pageNumbers.map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onClick(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  }
)

export default PaginationItems
