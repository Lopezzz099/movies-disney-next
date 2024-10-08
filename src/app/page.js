import CardCategory from "@/components/common/cardCategory/CardCategory";
import Carusel from "@/components/layout/carusel/Carusel";
import Movies from "@/components/pages/movies/Movies";

const getData = async () => {
  try {
    const res = await fetch("http://movies-disney-next.vercel.app/api/movies");
    const data = await res.json();
    return data;
  } catch (error) {
    return []
  }
};

export default async function Home() {
  const arrCategories = [
    {
      path: "/disney",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685642254/disney-app/common/scale_dqe8gx.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685642194/disney-app/video/1565217865-disney_ife6wf.mp4",
    },
    {
      path: "/pixar",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723130/disney-app/common/scale_x14p95.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723157/disney-app/video/1564676714-pixar_yhndpj.mp4",
    },
    {
      path: "/marvel",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723173/disney-app/common/scale_vsgmpq.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723193/disney-app/video/1564676115-marvel_xxp1ni.mp4",
    },
    {
      path: "/star-wars",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723210/disney-app/common/scale_xnp52l.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723225/disney-app/video/1608229455-star-wars_uubkro.mp4",
    },
    {
      path: "/national-geographic",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723240/disney-app/common/scale_jeuijf.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723250/disney-app/video/1564676296-national-geographic_bopzzb.mp4",
    },
  ];
  const arrGenders = [
    "comedia",
    "documental",
    "familiar",
    "animacion",
    "amistad",
  ];
  const movies = await getData();
  return (
    <main
      style={{
        padding: "0 calc(3.5vw + 24px)",
        paddingTop: "80px",
      }}
    >
      <Carusel movies={movies} />
      <div className="flex flex-wrap flex-row justify-between items-center gap-11 m-10auto relative">
        {arrCategories.map((card) => (
          <CardCategory key={card.path} cardCategory={card} />
        ))}
      </div>

      {arrGenders.map((gender) => (
        <Movies key={gender} movies={movies} gender={gender} />
      ))}
    </main>
  );
}
