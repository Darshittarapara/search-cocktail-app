import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { randomCoockTailurl } from 'service/getCoocktailsServcie';
import { searchCoockTailList } from 'service/SearchCockTail';
import { getSingleCoockTailList } from 'service/SingleCocktailsService';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [coocktailItems, setCoocktailItems] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [singleCockTailItem, setSingleCockTailItem] = useState([]);
  const fetchCockList = useCallback(() => {
    for (let i = 1; i <= 12; i++) {
      axios.get(randomCoockTailurl)
        .then((res) => {
          setCoocktailItems((previewState) => [...previewState, ...res.data.drinks])
        })
    }
  }, []);
  useEffect(() => {
    fetchCockList();
  }, [fetchCockList]);

  const searchCocktailHandler = async (query) => {
    const searchList = await searchCoockTailList(query);
    setHasError(false);
    console.log(searchList)
    if (searchList?.length > 0) {
      setCoocktailItems(searchList);
      return true;
    }
    setHasError(true);
    setCoocktailItems([]);
  }

  const getSingleCockTailHandler = useCallback(async (query) => {
    const cocktailList = await getSingleCoockTailList(query);
    setSingleCockTailItem(cocktailList);
  }, []);

  const resetSingleCockTailState = useCallback(() => {
    setSingleCockTailItem([]);
  }, [])

  const contextValues = {
    coocktailItems,
    onSearch: searchCocktailHandler,
    hasError,
    onGetSingleCockTail: getSingleCockTailHandler,
    onCancelSubscrition: fetchCockList,
    singleCockTailItem,
    onReset: resetSingleCockTailState
  }
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }
