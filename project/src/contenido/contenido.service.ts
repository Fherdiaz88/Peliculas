import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';

@Injectable()
export class ContenidoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateContenidoDto) {
    return this.prisma.contenido.create({
      data: {
        titulo: data.titulo,
        tipo: data.tipo,
      },
    });
  }

  findAll() {
    return this.prisma.contenido.findMany();
  }

  findOne(id: number) {
    return this.prisma.contenido.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateContenidoDto) {
    return this.prisma.contenido.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.contenido.delete({ where: { id } });
  }

  //filtrar por tipo
  findByTipo(tipo: string) {
    return this.prisma.contenido.findMany({ where: { tipo } });
  }

  
  
}
