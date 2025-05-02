import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { SeriesModule } from './serie/serie.module';
import { ContenidoModule } from './contenido/contenido.module';

@Module({
  imports: [
    PrismaModule,
    PeliculasModule,
    SeriesModule,
    ContenidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
