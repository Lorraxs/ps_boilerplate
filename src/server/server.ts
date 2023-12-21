import '@citizenfx/server';
import { App } from 'starboy-framework';
import { TestController } from './controllers/test.controller';

const server = App.create({
  controllers: [TestController],
});

server.start();
