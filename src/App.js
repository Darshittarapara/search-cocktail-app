import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { MainHeader } from 'components/MainHeader/MainHeader'
import SingleCocktail from './pages/SingleCocktail'

function App() {
  return (

    <Router>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/single-cocktail-details/:id' element={<SingleCocktail />} />
      </Routes>
    </Router>

  )
}

export default App
