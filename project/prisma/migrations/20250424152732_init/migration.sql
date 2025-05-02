-- CreateTable
CREATE TABLE "peliculas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "actores" TEXT NOT NULL,
    "produccion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peliculas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "temporadas" INTEGER NOT NULL,
    "episodios" INTEGER NOT NULL,
    "director" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "actores" TEXT NOT NULL,
    "produccion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contenido" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contenido_pkey" PRIMARY KEY ("id")
);
