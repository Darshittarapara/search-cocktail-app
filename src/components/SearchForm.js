import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  
  const { onSearch } = useGlobalContext();
  const changeHandler = (value) => {
    console.log(value);
    if (value !== "") {
      onSearch(value)
    }
  }
  return (
    <div className='search'>

      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='search-input'>Search your favourite cocktail</label>
          <input type='text' name='search-input' id='search-input' onChange={(e) => changeHandler(e.target.value)} />
        </div>

      </form>
    </div>

  )
}

export default SearchForm
