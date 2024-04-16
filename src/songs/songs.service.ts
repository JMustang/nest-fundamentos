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
    throw new Error('Error in DB while fetching record.');
    return this.songs;
  }
}
