import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local DB
  // local array

  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
    // throw new Error('Error in DB while fetching record.');
  }
}
