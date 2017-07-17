import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import genericSession from 'koa-generic-session';
import passport from 'koa-passport';
import Auth from './auth';
import Routes from './routes/routes';

const app = new Koa()
  .use(bodyParser())
  .use(genericSession())
  .use(Auth)
  .use(Routes.routes());

  app.listen(3000);