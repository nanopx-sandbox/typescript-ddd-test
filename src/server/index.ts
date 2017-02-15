/**
 * Created by: nanopx
 * Date: 2017/02/07
 * typescript-ddd - index
 */

import 'reflect-metadata';
import {createConnection, useContainer as useORMContainer, getMetadataArgsStorage} from 'typeorm';
import {createKoaServer, useContainer as useControllerContainer} from 'routing-controllers';
import {Container} from 'typedi';

useORMContainer(Container);
useControllerContainer(Container);

createConnection()
.then((connection) => {
  const app = createKoaServer({
    routePrefix: "/api",
    controllers: [ __dirname + '/controllers/**/*.js' ]
  });

  app.listen(3000);

  console.log('Server started at http://localhost:3000/');
  console.log(getMetadataArgsStorage());
})
.catch((error) => console.log(error.stack));
