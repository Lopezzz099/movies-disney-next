"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");

  let moviesFiltered = movies.filter(
    (movie) =>
      movie.category.toLowerCase().includes(name.toLowerCase()) ||
      movie.name.toLowerCase().includes(name.toLowerCase()) ||
      movie.cast.some((cast) =>
        cast.toLowerCase().includes(name.toLowerCase())
      ) ||
      movie.gender.some((gender) =>
        gender.toLowerCase().includes(name.toLowerCase())
      )
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/movies");
      const data = await res.json();
      setMovies(data);
    };

    getData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Título, personaje o género"
        className="input w-full"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex flex-wrap">
        {!name
          ? movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
          : moviesFiltered.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
