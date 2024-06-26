import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

const mockSongsService = {
  findAll: () => {
    return [{ id: 1, title: 'Clovis', artists: ['Sua mae'] }];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    // SongsService
    {
      provide: SongsService,
      useValue: mockSongsService,
    },
  ],
})
export class SongsModule {}
