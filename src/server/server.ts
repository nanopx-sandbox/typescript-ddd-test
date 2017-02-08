/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - index
 */

import 'reflect-metadata';
import { createConnection, useContainer, getMetadataArgsStorage } from 'typeorm';
import { Container } from 'typedi';
import { createKoaServer } from 'routing-controllers';

useContainer(Container);

createConnection()
.then((connection) => {
  createKoaServer({
    controllers: [ __dirname + '/src/controller/**/*.js' ]
  }).listen(3000);
  console.log('Server started at http://localhost:3000/');
  console.log(getMetadataArgsStorage());
})
.catch((error) => console.error(error));
