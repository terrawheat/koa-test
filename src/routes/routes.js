import KoaRouter from 'koa-router';
import request from 'request-promise';
import directory from '../serviceDiscovery';

const serviceList = directory();

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

app.get('/sample', async (ctx, next) => {
  let endpoints = await serviceList;
  let endpoint = `${endpoints.SampleService.pop()}/api/values`;
  
  console.log(`Accessing ${endpoint}`);

  ctx.body = await request(endpoint);

  await next();
});

export default app;