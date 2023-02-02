import React, { Fragment, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, useNavigate } from 'react-router-dom'
import { useGlobalContext } from 'context'
import './SingleCocktail.css';

const SingleCocktail = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const { onGetSingleCockTail, singleCockTailItem, onReset } = useGlobalContext();
  console.log(singleCockTailItem);
  useEffect(() => {
    onGetSingleCockTail(id);
    return () => {
      onReset()
    }
  }, [id, onGetSingleCockTail, onReset]);

  const showDetails = (title, value) => {
    return (
      <Fragment key={title}>
        <div className='col-4 mt-2 mb-2'>
          <span className='drink-data'>{title}</span>
        </div>
        <div className='col-8'>
          <span>{value}</span>
        </div>
      </Fragment>

    )
  }
  const title = singleCockTailItem.length > 0 ? singleCockTailItem[0].strDrink : ""
  return (
    <div className='container single-cocktail-container'>
      <div className='section'>
        <button className='btn btn-success m-6 back-btn' onClick={() => navigator('/')}>Back to home</button>
        <h2>{title}</h2>
      </div>

      <div className='details-container'>
        {singleCockTailItem.length > 0 ? singleCockTailItem.map(({
          strDrinkThumb,
          strGlass,
          strDrink,
          strAlcoholic,
          strCategory,
          strIngredient2,
          strInstructions

        }, index) => {
          return (
            <Fragment key={`${index}`}>
              <div className='poster-block'>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className='details'>
                <div className='row'>
                  {showDetails("Name", strDrink)}
                  {showDetails("Category", strCategory)}
                  {showDetails("Info", strAlcoholic)}
                  {showDetails("Glass", strGlass)}
                  {showDetails("Description", strInstructions)}
                </div>
              </div>
            </Fragment>
          )
        }) : (
          <Loading />
        )}

      </div>
    </div>
  )
}

export default SingleCocktail
