import { Module } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { ContenidoController } from './contenido.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ContenidoController],
  providers: [ContenidoService, PrismaService],
})
export class ContenidoModule {}
