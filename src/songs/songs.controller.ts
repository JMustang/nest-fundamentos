import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This action adds a new endpoint';
  }
  @Get()
  findAll() {
    return 'This action returns all songs';
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