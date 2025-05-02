import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { ContenidoService } from './contenido.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';

@Controller('contenido')
export class ContenidoController {
  constructor(private readonly contenidoService: ContenidoService) {}

  @Post()
  create(@Body() dto: CreateContenidoDto) {
    return this.contenidoService.create(dto);
  }

  @Get()
  @ApiQuery({ name: 'tipo', required: false, description: 'Filtrar por tipo (pelicula o serie)' })
  findAll(@Query('tipo') tipo?: string) {
    if (tipo) {
      return this.contenidoService.findByTipo(tipo);
    }
    return this.contenidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contenidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateContenidoDto) {
    return this.contenidoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contenidoService.remove(+id);
  }
}
