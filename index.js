const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const aws = require('aws-sdk');
server.set('views', './views');
server.engine('html', require('ejs').renderFile);

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({extended: true}));

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || require('./secrets').S3_BUCKET_NAME;

server.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET_NAME,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

});

server.post('/save-details', (req, res) => {
  // const s3 = new aws.S3({
  //   params: {
  //     Bucket: S3_BUCKET_NAME
  //   }
  // });
  // console.log(typeof req.body.file);
  // const fileName = req.body.file.name;
  // const fileType = req.body.file.type;
  // const s3Params = {
  //   Bucket: S3_BUCKET_NAME,
  //   Key: fileName,
  //   Expires: 60,
  //   ContentType: fileType,
  //   ACL: 'public-read',
  //   Body: req.body.file
  // };
  // s3.upload(s3Params, function(err, data){
  //   if(err){
  //     console.log(err);
  //   } else {
  //     res.status(200).json({
  //       msg: 'success',
  //       data: data
  //     });
  //   }
  // })
  // console.log(req.body);
  // res.send('success');
});

const userRouter = require('./routers/user.router');
const articleRouter = require('./routers/article.router');

const port = process.env.PORT || 8080;
const MONGOURI = process.env.MONGOURI || require('./secrets').MONGOURI;

//run the passport configuration
require('./config/passport');

server.use(express.static(__dirname + '/public'));


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
