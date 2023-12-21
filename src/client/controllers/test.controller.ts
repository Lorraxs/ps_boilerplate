import { Controller } from 'starboy-framework';
import { emitCallback } from '../utils/callback';
import { AppController } from '@core-shared/interfaces';

@Controller()
export class TestController extends AppController {
  constructor() {
    super('TestController');
    /* setInterval(async () => {
      console.log('test');
      const response = await emitCallback<IResponse>('test');
      this.log(response);
    }, 1000); */
  }
}
