import React, { FC } from 'react'
import { Navbar } from 'react-bootstrap'

interface TitleProps {
  title: string
}

const PageTitle: FC<TitleProps> = React.memo(({ title }) => (
  <Navbar bg="transparent" variant="primary">
    <Navbar.Brand>{title}</Navbar.Brand>
  </Navbar>
))

export default PageTitle
