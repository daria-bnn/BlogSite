import { FC } from 'react'
import { Container } from 'react-bootstrap'

import WrapperPage from './WrapperPage/WrapperPage'

const NoMatch: FC = () => (
  <WrapperPage>
    <Container className="p-0">Страница не найдена</Container>
  </WrapperPage>
)

export default NoMatch
