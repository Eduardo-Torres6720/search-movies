import { Key } from "./Key"

export const getMovie = async (id = 0) => {
    try {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${Key()}`
      const response = await fetch(url)
      return await response.json()
      
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }