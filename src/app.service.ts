import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(private devConfigServe: DevConfigService) {}

  getHello(): string {
    return `Free Code Camp! ${this.devConfigServe.getDBHOST()}`;
  }
}
