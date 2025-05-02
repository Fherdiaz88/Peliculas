import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Injectable()
export class SerieService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSerieDto) {
    return this.prisma.serie.create({
      data,
    });
  }

  findAll() {
    return this.prisma.serie.findMany();
  }

  findOne(id: number) {
    return this.prisma.serie.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateSerieDto) {
    return this.prisma.serie.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.serie.delete({ where: { id } });
  }
}