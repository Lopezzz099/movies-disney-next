import CardMovies from "@/components/common/cardMovie/cardMovies"

const getData = async (name) => {
    const res = await fetch(`http://localhost:3000/api/movies/category/${name}`)
    const data = await res.json()
    return data
}

const categoryName = async( {params} ) => {
    const moviesByCategory = await getData(params.categoryName)
  return (
    <div><CardMovies movies={moviesByCategory} /></div>
  )
}

export default categoryName