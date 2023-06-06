import Movies from "@/components/pages/movies/Movies";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const data = await res.json();
  return data;
};

export default async function MoviesFilter() {
  const movies = await getData();
  return (
    <main
      style={{
        padding: "0 calc(3.5vw + 24px)",
      }}
    >
      <Movies movies={movies} />
    </main>
  );
}
