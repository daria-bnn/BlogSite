import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PostsPage from './pages/PostsPage'
import NoMatch from './pages/NoMatch'

const App = React.memo(() => (
  <Container className="d-flex flex-column justify-content-center flex-shrink-0 flex-fill">
    <Router>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </Container>
))
export default App
