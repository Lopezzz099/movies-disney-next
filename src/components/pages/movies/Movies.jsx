import Image from 'next/image'
import React from 'react'

const Movies = ({movies}) => {
  return (
    movies.map((movie) => (
        <div key={movie.id}>
          {/* <Image src={movie.frontImage} width={300} height={300} alt={movie.name}/> */}
          <Image
            src={movie?.frontImage}
            width={300}
            height={300}
            alt={movie.name}
            className="w-auto h-auto"
          />
          <h1 className="text-white">{movie.name}</h1>
        </div>
      ))
  )
}

export default Movies