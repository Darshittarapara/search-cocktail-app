import Cocktail from 'components/Cocktail'
import React from 'react'
import CocktailList from '../components/CocktailList'
import { MainHeader } from '../components/MainHeader/MainHeader'
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
