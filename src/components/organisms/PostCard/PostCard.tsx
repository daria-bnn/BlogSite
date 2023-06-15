import { FC, useState } from 'react'
import { Card, Collapse } from 'react-bootstrap'
import { Post } from '../../../utils/types'
import ButtonCollapse from '../../atoms/ButtonCollapse/ButtonCollapse'
import UserProfile from '../../molecules/UserProfile/UserProfile'
import CommentBlock from '../CommentBlock/CommentBlock'

const mockComments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
]

interface PostCardProps {
  post: Post
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const [isOpenComments, setIsOpenComments] = useState(false)

  return (
    <Card style={{ width: 'auto', alignItems: 'start', marginBottom: 32 }} className="p-3">
      <UserProfile
        nameUser={`user-${post.userId}`}
        widthAvatar={32}
        fontSize={6}
      />
      <Card.Body className="p-0">
        <Card.Title className="text-start">{post.title}</Card.Title>
        <Card.Text className="text-start">{post.body}</Card.Text>
      </Card.Body>

      <ButtonCollapse
        isOpen={isOpenComments}
        onClick={setIsOpenComments}
        ariaControls="comments"
      >
        {isOpenComments ? 'Скрыть комментарии' : 'Показать комментарии'}
      </ButtonCollapse>

      <Collapse in={isOpenComments}>
        <div id="comments" className="text-start">
          {mockComments.map((comment) => (
            <CommentBlock comment={comment} />
          ))}
        </div>
      </Collapse>
    </Card>
  )
}

export default PostCard
