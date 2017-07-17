import jwt from 'jsonwebtoken';
import moment from 'moment';

export default async function (ctx, next) {
  const token = ctx.request.header.authorization.split(' ').pop();
  const { exp: expiry } = jwt.decode(token);

  if (moment(expiry).isBefore(moment())) {
    ctx.throw(400, 'Token Expired');
  }

  await next();
}