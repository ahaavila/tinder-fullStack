const express = require('express');

const routes = require('./router');

//criando o servidor
const server = express();

server.use(express.json());

server.use(routes);

server.listen(3333);
