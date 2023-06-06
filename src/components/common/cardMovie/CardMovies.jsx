import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardMovies = ({ movies }) => {
  return movies.map((movie) => (
    <Link key={movie.id} href={`/movies/${movie.id}`}>
      <div>
        {/* <Image src={movie.frontImage} width={300} height={300} alt={movie.name}/> */}
        <Image
          src={movie?.frontImage}
          width={300}
          height={300}
          alt={movie.name}
          className="w-auto h-auto"
        />
      </div>
    </Link>
  ));
};

export default CardMovies;
