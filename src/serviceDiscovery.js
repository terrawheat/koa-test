import request from 'request-promise';

let directory;

export default async function () {
  if (directory) {
    return directory;
  }

  directory = await request({
    uri: 'http://localhost:27285/api/directory',
    json: true
  });

  return directory;
}