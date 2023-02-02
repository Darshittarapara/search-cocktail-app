import React from 'react'
import './CocktailList.css';

const CocktailList = ({ id, title, url, alcoholic, category }) => {
  console.log(url)
  const singleDetailsHandler = (drinkId) => {
    console.log(drinkId);
  }
  return (
    <div className='card mt-10' style={{ borderRadius: "10px" }}>
      <div className='img-top-card'>
        {url ? <img src={url} alt={title} height={250} /> : "hellp"}
      </div>
      <div className='card-body'>
        <div className='cooktail-footer'>
          <h3>{title}</h3>
          <h6>{category}</h6>
          <p>{alcoholic}</p>
          <button className='btn btn-success' onClick={() => singleDetailsHandler(id)}>Details</button>
        </div>

      </div>
    </div>
  )
}

export default CocktailList
