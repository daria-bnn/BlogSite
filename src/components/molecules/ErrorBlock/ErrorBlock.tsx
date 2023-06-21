import { FC } from 'react'
import { Alert } from 'react-bootstrap'

const ErrorBlock: FC = () => (
  <Alert variant="danger">
    Произошла ошибка. Попробуйте обновить страницу или зайти позже.
  </Alert>
)

export default ErrorBlock
