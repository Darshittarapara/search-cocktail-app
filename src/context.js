import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react';
import { randomCoockTailurl } from 'service/getCoocktailsServcie';
import { searchCoockTailList } from 'service/SearchCockTail';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [coocktailItems, setCoocktailItems] = useState([]);
  const [hasError, setHasError] = useState(false);
  const fetchCockList = () => {
    for (let i = 1; i <= 12; i++) {
      axios.get(randomCoockTailurl)
        .then((res) => {
          setCoocktailItems((previewState) => [...previewState, ...res.data.drinks])
        })
    }
  }
  useEffect(() => {
    fetchCockList();
  }, []);

  const searchCocktailHandler = async (query) => {
    const searchList = await searchCoockTailList(query);
    setHasError(false);
    if (searchList?.length > 0) {
      setCoocktailItems(searchList);
      return true;
    }
    setHasError(true);
    setCoocktailItems([]);
  }
  const contextValues = {
    coocktailItems,
    onSearch: searchCocktailHandler,
    hasError
  }
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }
