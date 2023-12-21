import {
  ChatCommand,
  Controller,
  Inject,
  NetCallback,
  NetEvent,
  UseGuard,
} from 'starboy-framework';

import { AppController, IResponse, eStatus } from '@core-shared/interfaces';
import ExportController from '@core-sv/controllers/export.controller';
import { cPlayer } from '@core-sv/class/Player.class';

@Controller()
export class TestController extends AppController {
  constructor() {
    super('TestController');
    /* setInterval(async () => {
      const player = await ExportController.callService<cPlayer>(
        'PlayersService',
        'getPlayer',
        1
      );
      if (!player) return;
      this.logInfo(player.money);
      player.removeAccountMoney('cash', 1);
      this.logInfo(player.money);
    }, 0); */
  }

  @NetCallback('test')
  async test(): Promise<IResponse> {
    const player = await ExportController.callService(
      'PlayersService',
      'getPlayer',
      1
    );
    this.logInfo(player.name);
    return {
      status: eStatus.SUCCESS,
      data: player.name,
    };
  }
}
