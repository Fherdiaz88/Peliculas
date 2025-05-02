import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Películas
  const pelicula1 = await prisma.peliculas.create({
    data: {
      titulo: 'Avengers: Endgame',
      director: 'Anthony Russo',
      genero: 'Acción',
      duracion: 181,
      actores: 'Robert Downey Jr., Chris Evans',
      produccion: 'Marvel Studios',
    },
  });

  const pelicula2 = await prisma.peliculas.create({
    data: {
      titulo: 'The Matrix',
      director: 'Lana Wachowski',
      genero: 'Sci-Fi',
      duracion: 136,
      actores: 'Keanu Reeves, Laurence Fishburne',
      produccion: 'Warner Bros.',
    },
  });

  const pelicula3 = await prisma.peliculas.create({
    data: {
      titulo: 'Inception',
      director: 'Christopher Nolan',
      genero: 'Sci-Fi',
      duracion: 148,
      actores: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
      produccion: 'Legendary Pictures',
    },
  });

  // Series
  const serie1 = await prisma.serie.create({
    data: {
      titulo: 'Stranger Things',
      director: 'Matt Duffer',
      genero: 'Sci-Fi',
      temporadas: 3,
      episodios: 25,
      actores: 'Winona Ryder, David Harbour',
      produccion: 'Netflix',
    },
  });

  const serie2 = await prisma.serie.create({
    data: {
      titulo: 'Breaking Bad',
      director: 'Vince Gilligan',
      genero: 'Drama',
      temporadas: 5,
      episodios: 62,
      actores: 'Bryan Cranston, Aaron Paul',
      produccion: 'AMC',
    },
  });

  // Contenido
  const contenido1 = await prisma.contenido.create({
    data: { titulo: 'Avengers: Endgame', tipo: 'pelicula' },
  });

  const contenido2 = await prisma.contenido.create({
    data: { titulo: 'The Matrix', tipo: 'pelicula' },
  });

  const contenido3 = await prisma.contenido.create({
    data: { titulo: 'Stranger Things', tipo: 'serie' },
  });

  const contenido4 = await prisma.contenido.create({
    data: { titulo: 'Breaking Bad', tipo: 'serie' },
  });

  console.log({ pelicula1, pelicula2, pelicula3, serie1, serie2, contenido1, contenido2, contenido3, contenido4 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
