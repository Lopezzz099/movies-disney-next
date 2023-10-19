import MovieDetail from "@/components/pages/movieDetail/MovieDetail";

const getMovie = async (id) => {
  const res = await fetch(
    `http://movies-disney-next.vercel.app/api/movies/${id}`
  );
  const movie = await res.json();
  return movie;
};

const MovieDetailServer = async ({ params }) => {
  const movie = await getMovie(params.id);
  const movieStyle = {
    backgroundImage: `url(${movie.bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return <MovieDetail movie={movie} />;
};

export default MovieDetailServer;
