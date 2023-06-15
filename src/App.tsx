import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import PostsPage from './pages/PostsPage'

const App = () => (
  <Container className="App">
    <PostsPage />
  </Container>
)

export default App
