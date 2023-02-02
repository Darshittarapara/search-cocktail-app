import axios from "axios";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const searchCoockTailList = async (query) => {
    try {
        const response = await axios.get(url + query)
        if (response.status === 200) {
            return response.data.drinks
        }
    } catch (error) {
        return error
    }
}