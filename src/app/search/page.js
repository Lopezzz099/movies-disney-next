"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import React, { useEffect, useState } from "react";
import "./search.css";

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
    <div style={{ paddingTop: "74px" }}>
      <input
        type="text"
        placeholder="Título, personaje o género"
        className="search w-full h-[100px] text-[44px] outline-none text-[#a8a9ad]"
        onChange={(e) => setName(e.target.value)}
      />
      <p style={{marginBottom: "20px", color: "#f9f9f9", fontSize: "20px", padding: "0 calc(3.5vw + 24px)", marginTop: "40px" }}>Explorar</p>
      <div
        className="grid grid-cols-5 gap-7"
        style={{ padding: "0 calc(3.5vw + 24px)" }}
      >
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
