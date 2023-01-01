import { useEffect, useState } from 'react'
import ButtonMovie from './components/ButtonMovie'
import { getMovie } from './Api'
import './App.css'
import Movie from './components/Movie'

function App() {
  const [movie, setMovie] = useState()
  const [data, setData] = useState()

  const onSearchHandler = async (id) => {
    const result = await getMovie(id)
    console.log(result)
    setData(id)
    if (result.success == false) {
      console.log("eita")
      changeMovie()
      setData(undefined)
    }
    setMovie(result)
  }
  
  const changeMovie = () => {
    const aleatorio = Math.floor(Math.random() * 994) + 2
    onSearchHandler(aleatorio)
    console.log(aleatorio)
  }

  return (
    <div className="App">
      <Movie movie={movie}
      data={data}/>
      <ButtonMovie onSearchHandler={onSearchHandler} changeMovie={changeMovie}/>
    </div>
  )
}

export default App
