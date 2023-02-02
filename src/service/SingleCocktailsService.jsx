import axios from "axios";

export const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const getSingleCoockTailList = async (query) => {
    try {
        const response = await axios.get(url + query)
        if (response.status === 200) {
            return response.data.drinks
        }
    } catch (error) {
        return error
    }
}