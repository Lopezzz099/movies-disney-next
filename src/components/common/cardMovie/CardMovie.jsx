import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./CardMovieStyles.css"

const CardMovie = ({ movie, isInHome=false, isInList=false }) => {
  return (
    <Link href={`/movies/${movie.id}`} className={isInHome ? "p-[10px]" : "max-w-none"}>
      <Image
        key={movie.id}
        src={movie?.frontImage}
        width={300}
        height={300}
        alt={movie.name}
        className={`${isInHome && "w-auto"} ${isInList && "w-full"} h-auto shadow-[rgba(0,0,0,0.69)_0px_26px_30px_-10px,rgba(0,0,0,0.73)_0px_16px_10px_-10px] scale-100 rounded hover:scale-105 duration-300 hover:duration-300 transition-[transform,box-shadow] hover:transition-[transform,box-shadow] ease-out hover:ease-out hover:shadow-[rgba(0,0,0,0.8)_0px_40px_58px_-16px,rgba(0,0,0,0.72)_0px_30px_22px_-10px] hover:outline-slate-50 hover:outline-offset-0 aplicandoHover`}
      />
    </Link>
  );
};

export default CardMovie;
