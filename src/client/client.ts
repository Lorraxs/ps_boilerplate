import '@citizenfx/client';
import { TestController } from 'controllers/test.controller';
import { App } from 'starboy-framework';
const client = App.create({
  controllers: [TestController],
});
client.start();
