const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRouter = require('./routers/user.router');
const articleRouter = require('./routers/article.router');

const port = process.env.PORT || 8080;
const MONGOURI = process.env.MONGOURI || require('./secrets').MONGOURI;

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//connect to the database
mongoose.connect(MONGOURI);

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.use(userRouter);
server.use(articleRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
