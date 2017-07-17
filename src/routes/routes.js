import KoaRouter from 'koa-router';

const app = new KoaRouter();

app.get('/foo', async (ctx, next) => {
  ctx.body = {
    foo: 'nar'
  };

  await next();
});

app.get('/bar', async (ctx, next) => {
  ctx.body = Math.floor(Math.random() * 100000);

  await next();
});

export default app;