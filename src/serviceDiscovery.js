import axios from 'axios';

let directory;

export default async function () {
  if (directory) {
    return directory;
  }

  directory = await axios.get('http://localhost:27285/api/directory');

  return directory.data;
}