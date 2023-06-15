import { FC } from 'react'
import { Comment } from '../../../utils/types'

interface CommentBlockProps {
  comment: Comment
}

const CommentBlock: FC<CommentBlockProps> = ({ comment }) => (
  <div className="text-start">
    <a className="text-body-secondary fst-italic" href={comment.email}>
      {comment.email}
    </a>
    <p>{comment.body}</p>
  </div>
)

export default CommentBlock
