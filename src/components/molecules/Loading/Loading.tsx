import { Container, Spinner } from 'react-bootstrap'

const Loading = () => (
  <Container className="flex-shrink-0 flex-fill d-flex align-items-center justify-content-center">
    <Spinner className="me-3 text-primary" />
    <span>Идет загрузка ...</span>
  </Container>
)

export default Loading
