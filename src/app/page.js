const getData = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const movies = await getData();
  return (
    <main
      style={{
        minHeight: "calc(100vh - 250px)",
        overflowX: "hidden",
        padding: "0 calc(3.5vw + 24px)",
        backgroundColor: "rgb(26, 29, 41)",
        transition: "opacity 200ms ease 0s",
      }}
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* <Image src={movie.frontImage} width={300} height={300} alt={movie.name}/> */}
          <img
            src={movie?.frontImage}
            width={300}
            height={300}
            alt={movie.name}
          />
          <h1>{movie.name}</h1>
        </div>
      ))}
    </main>
  );
}
