import { FC } from 'react'
import { Comment } from '../../../utils/types'

interface CommentProps {
  comment: Comment
}

const Comment: FC<CommentProps> = ({ comment }) => (
  <div className="text-start">
    <a className="text-body-secondary fst-italic" href={comment.email}>
      {comment.email}
    </a>
    <p>{comment.body}</p>
  </div>
)

export default Comment
