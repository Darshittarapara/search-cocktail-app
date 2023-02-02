import { useGlobalContext } from 'context'
import Error from 'pages/Error';
import React from 'react'
import { Link } from 'react-router-dom'
import CocktailList from './CocktailList';
import Loading from './Loading';


const Cocktail = (props) => {
  const { coocktailItems, hasError } = useGlobalContext();


  return (
    <div className='cocktails-center mt-10'>
      {hasError && <Error />}
      {!hasError && coocktailItems?.length === 0 && <Loading />}
      {!hasError && coocktailItems?.length > 0 && coocktailItems.map(({ idDrink, strCategory, strAlcoholic, strDrinkThumb, strDrink }) => {
        return (
          <CocktailList key={`${idDrink}`} id={idDrink} title={strDrink} url={strDrinkThumb} alcoholic={strAlcoholic} category={strCategory} />
        )
      })}

    </div>
  )
}

export default Cocktail
