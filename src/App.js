import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import { MainHeader } from 'components/MainHeader/MainHeader'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar';

function App() {
  return (

    <Router>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>

  )
}

export default App
