import { SongsService } from './songs.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create(
      'Morango do nordeste de Lairton e seus teclados',
    );
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'This action returns a #${id} song';
  }
  @Put(':id')
  update() {
    return 'This action updates a #${id} song';
  }
  @Delete(':id')
  remove() {
    return 'This action removes a #${id} song';
  }
}
