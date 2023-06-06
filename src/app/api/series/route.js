import { NextResponse } from "next/server";

export function GET() {
  const series = [
    {
      id: 1,
      name: "Daredevil",
      description:
        "Matt Murdock no es cualquier abogado de Hell's Kitchen. Sus sentidos se agudizaron tras quedar ciego en un accidente de niño. Bajo el manto de la noche, lucha contra el crimen y atrae enemigos poderosos, como Wilson Fisk (alias Kingpin). Pero su dilema crece día a día: debajo de la máscara, quiere creer en la ley; Daredevil, hace justicia por mano propia.",
      category: "marvel",
      gender: ["cine-negro", "superheroes", "crimen", "accion-y-aventura"],
      clasification: "18+",
      releaseYear: "2015",
      frontImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65B8A33C5989488D9C8B766E1D1103204441EAD5791BA08836C848A7312CC6EC/scale?width=800&aspectRatio=1.78&format=jpeg",
      titleImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF631CA76DE8BF45FC02018A688DA0958C28A81B868AAC16A3D58C4B109B80C7/scale?width=1920&aspectRatio=1.78&format=png",
      bgImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9B74E57D6D3774BA6E98BAEE11DC083313A46A842CCB8A522734BFBF43615CB0/scale?width=2880&aspectRatio=1.78&format=jpeg",
      cast: [
        "Charlie Cox",
        "Deborah Ann Woll",
        "Elden Henson",
        "Toby Leonard Moore",
        "Vondie Curtis-Hall",
        "Bob Gunton",
      ],
      season: 3,
    },
    {
      id: 2,
      name: "Falcon y el Soldado del Invierno",
      description:
        "Anthony Mackie y Sebastian Stan encarnan a Sam Wilson (Falcon) y Bucky Barnes (el Soldado del Invierno) en “Falcon y el Soldado del Invierno”, de Marvel Studios. El dúo que se formó al final de “Avengers: Endgame” ahora entra en acción en una aventura por el mundo que pondrá a prueba todas sus habilidades, incluso la paciencia. La serie de seis episodios, con Kari Skogland en dirección y Malcolm Spellman como guionista principal, también tiene de protagonistas a Daniel Brühl (Zemo), Emily VanCamp (Sharon Carter) y Wyatt Russell (John Walker).",
      category: "marvel",
      gender: [
        "ciencia-ficcion",
        "superheroes",
        "amistad",
        "accion-y-aventura",
      ],
      clasification: "14+",
      releaseYear: "2021",
      frontImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B36DCAF1737FC330394AAF21D22D695E351CA093C3B32F30B473802580A61BA/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      titleImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F71EF201F0A85A1671BE73C172CF67A8A143A498E5573737C72BF61B56D549D4/scale?width=1920&aspectRatio=1.78&format=png",
      bgImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/78DD7450FE6C882326E93FADAF687CCAA8D64E2BB961E781338426461FA121AE/scale?width=2880&aspectRatio=1.78&format=jpeg",
      cast: [
        "Sebastian Stan",
        "Anthony Mackie",
        "Daniel Brühl",
        "Emily VanCamp",
        "Wyatt Russell",
        "Erin Kellyman",
      ],
      season: 1,
    },
    {
        id:3,
      name: "Moon Knight",
      description:
        "Steven Grant parecía llevar una vida sin sobresaltos hasta que la realidad empezó a desmoronarse a sus pies, rodeado de pesadillas de otra vida: la del mercenario Marc Spector. Además de múltiples personalidades, ahora tiene enemigos brutales que lo persiguen, y un misterio mortal que resolver con los dioses del antiguo Egipto. Algunas secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles.",
      category: "marvel",
      gender: ["fantasia", "superheroes", "accion-y-aventura"],
      clasification: "14+",
      releaseYear: "2022",
      frontImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B531A83D55BFF108A7A0F0CB5DD873A93EAB2ACEA1A08A05A1DCA48E895C01EA/badging?width=800&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      titleImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D007D2984473965002BAACB792B217B895128F798992B98024538A53D1EE7720/scale?width=1920&aspectRatio=1.78&format=png",
      bgImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A01991D23E4E8A32D54B56A3921B31B2662805A1CC50ED9418997CDCD2D2E55/scale?width=2880&aspectRatio=1.78&format=jpeg",
      cast: [
        "Oscar Isaac",
        "May Calamawy",
        "Khalid Abdalla",
        "Ann Akinjirin",
        "Antonia Salib",
        "F. Murray Abraham",
      ],
      season: 1,
    },
    {
        id: 4,
      name: "Gordon Ramsay: Sabores extremos - Aventuras extremas",
      description:
        "Todo se vuelve más personal cuando Gordon se enfrenta a los Chefs estrella Paul Ainsworth y Matt Waldron del Reino Unido, quienes comenzaron en la cocina de Ramsay antes de abrir sus propios restaurantes. Con Paul y Matt trabajando en terreno local, Gordon tendrá que ser muy municioso con el cocinero finalista para evitar que el estudiante se convierta en maestro. Mientras tanto, en Costa Rica, Gordon enfrenta su mayor desafío: competir cabeza a cabeza con su hija Tilly en una épica batalla culinaria",
      category: "national-geographic",
      gender: ["reality", "estilo-de-vida", "juegos-y-competiciones"],
      clasification: "12+",
      releaseYear: "2022",
      frontImage:
        " https://res.cloudinary.com/dkwjizhdg/image/upload/v1685451665/disney/gordon-frontimg_ehd19h.jpg",
      titleImage:
        " https://res.cloudinary.com/dkwjizhdg/image/upload/v1685451666/disney/gordon-titleimg_e5vjzl.png",
      bgImage:
        " https://res.cloudinary.com/dkwjizhdg/image/upload/v1685451666/disney/gordon-bgi_y3brip.jpg",
      cast: ["Gordon Ramsey"],
      season: 1,
    },
    {
        id: 5,
      name: "Gorongosa: El paraíso renace",
      description:
        "El Parque Nacinal Gorongosa era conocido como el edén de Africa, pero 15 años de guerra casi acaban por completo con los animales, por carne y dinero. Ahora, es el escenario de mayor esfuerzo de restauración de la vida silvestre de todos los tiempos. Esta es la historia de Gorongosa, contada a través del viaje de una elefanta tenaz, Mwana Nzo. Marcada por la guerra, ella y su familia se adaptan lentamente a la paz en un parque que ahora reboza de vida.",
      category: "national-geographic",
      gender: ["documental", "animales", "naturaleza"],
      clasification: "12+",
      releaseYear: "2022",
      frontImage:
        "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685452253/disney/gorongosa-front_img_tlx4hm.jpg",
      titleImage:
        "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685452254/disney/gorongosa-titleimg_nfnman.png",
      bgImage:
        " https://res.cloudinary.com/dkwjizhdg/image/upload/v1685452254/disney/gorongosa-bgi_d6lmpb.jpg",
      cast: ["Bryant Barnett"],
      season: 1,
    },
    {
        id: 6,
      name: "Tiburones en la noche",
      description:
        "Desde las profundidades azules del océano, hasta el interminable cielo, el público obtendrá una mirada sin precedentes de la vida de los tiburones martillo y su sorprendente conexión con la luna.",
      category: "national-geographic",
      gender: ["documental", "animales", "naturaleza"],
      clasification: "12+",
      releaseYear: "2022",
      frontImage:
        "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685452649/disney/tiburones-frontimg_j9t0kn.jpg",
      titleImage:
        "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685452649/disney/tiburones-titleimg_v6usxk.png",
      bgImage:
        " https://res.cloudinary.com/dkwjizhdg/image/upload/v1685452649/disney/tiburones-bgi_q0kmcj.jpg",
      cast: ["Toby Ricketts"],
      season: 1,
    },
    {
        id: 7,
      name: "Secreto en los océanos",
      description:
        "Desconecta el océano para revelar secretos ocultos y mundos perdidos con una tecnología innovadora, impresionantes fotografías y conocimientos de los mejores arqueólogos marinos. Drain the oceans ofrece nuevos y profundos conocimientos sobre la épica historia de la civilización humana y de la Tierra, exponiendo ciudades hundidas, naufragios y asombrosas maravillas naturales de las profundidades.",
      category: "national-geographic",
      gender: ["historia", "docuserie"],
      clasification: "14+",
      releaseYear: "2018-2022",
      frontImage:
        "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685455812/disney/oceanos-frontimg_mcvmd9.jpg",
      titleImage:
        "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685455814/disney/oceanos-titleimg_l4nm0l.png",
      bgImage:
        " https://res.cloudinary.com/dkwjizhdg/image/upload/v1685455814/disney/oceanosbgi_r11iep.jpg",
      cast: ["Rusell Boulter"],
      season: 5,
    },
  ];
  return NextResponse.json(series);
}
