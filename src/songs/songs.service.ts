import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local DB
  // local array

  private readonly songs: Song[] = [];

  create(song: Song): Song[] {
    this.songs.push(song);
    return this.songs;
  }
  findAll(): Song[] {
    return this.songs;
  }
}
