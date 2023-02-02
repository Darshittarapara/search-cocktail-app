import Cocktail from 'components/Cocktail'
import React from 'react'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div className='container-fluid'>
      <SearchForm />
      <Cocktail />
    </div>
  )
}

export default Home
