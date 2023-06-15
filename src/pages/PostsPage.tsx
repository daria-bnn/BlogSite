import { FC } from 'react'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/atoms/PageTitle/PageTitle'
import PaginationItems from '../components/molecules/PaginationItems/PaginationItems'
import PostCard from '../components/organisms/PostCard/PostCard'
import WrapperPage from './WrapperPage/WrapperPage'

const PostsPage: FC = () => (
  <WrapperPage>
    <Container className="p-0">
      <PageTitle title="Список постов" />
      <PostCard
        post={{
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        }}
      />
      <PaginationItems currentPage={2} totalPosts={99} postsPerPage={10} />
    </Container>
  </WrapperPage>
)

export default PostsPage
