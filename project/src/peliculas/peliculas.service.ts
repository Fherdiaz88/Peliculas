import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { PrismaService } from 'src/prisma/prisma.service';
 


@Injectable()
export class PeliculasService {
  constructor(private prisma: PrismaService) {}

  create(createPeliculaDto: CreatePeliculaDto) {
    return 'This action adds a new pelicula';
  }

  findAll() {
    return this.prisma.peliculas.findMany();
  }
  

  findOne(id: number) {
    return this.prisma.peliculas.findUnique({
      where: { id },
    });
  }
  

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return this.prisma.peliculas.delete({
      where: { id: id },
  })
}
}
