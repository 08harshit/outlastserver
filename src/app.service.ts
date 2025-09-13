import { Injectable } from '@nestjs/common';

import { PlayerState, BulletState, ObstacleState, GameState } from 'outlast-shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
