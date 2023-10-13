"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movies.css";
import CardMovie from "@/components/common/cardMovie/CardMovie";

const Movies = ({ movies, gender }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: false,
  };
  console.log(movies)

  return (
    <div>
      <h4 className=" text-white text-xl capitalize">{gender}</h4>
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.gender.includes(gender))
          .map((movie) => {
            return (
              <div key={movie.id}>
                <CardMovie movie={movie} isInHome={true}/>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Movies;
