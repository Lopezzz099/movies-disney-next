import CardMovie from "@/components/common/cardMovie/CardMovie";

const getData = async () => {
  try {
    const res = await fetch("http://movies-disney-next.vercel.app/api/movies");
    const data = await res.json();
    return data;
  } catch (error) {
    return []
  }
};

export default async function MoviesFilter() {
  const movies = await getData();

  return (
    <main
      className="grid grid-cols-5 gap-7"
      style={{ padding: "100px calc(3.5vw + 24px)" }}
    >
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
