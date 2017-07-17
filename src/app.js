import Koa from 'koa';
import Routes from './routes/routes';

const app = new Koa()
  .use(Routes.routes());

  app.listen(3000);