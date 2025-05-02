// src/series/series.module.ts
import { Module } from '@nestjs/common';
import { SeriesService } from './serie.service';
import { SeriesController } from './serie.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService, PrismaService],
})
export class SeriesModule {}
