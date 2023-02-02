
import axios from 'axios'

const Base_Url = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params:{
    maxResult:"29"
  },
   

    
  headers: {
   
    'X-RapidAPI-Key': '6bbd764155msh24dc57a7a702d2cp1ed313jsn8a497c325ae7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
  };
 

export const ApiService = {
async fetching(url) {
    const response = await axios.get(`${Base_Url}/${url}`,options )
    return response.data
}
}