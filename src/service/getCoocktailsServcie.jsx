import axios from "axios";

export const randomCoockTailurl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const getCoockTailList = async () => {
   try {
      const response = await axios.get(randomCoockTailurl)
      if (response.status === 200) {
         return response.data.drinks
      }
   } catch (error) {
      return error
   }
}