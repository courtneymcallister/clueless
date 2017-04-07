const mongoose = require('mongoose');

const articleModel = mongoose.Schema({
  image:{
    type: String //url stored somewhere else?
  },
  category:{
    type: String,
    // required: true
  },
  owner:{
    type: String,
    // required: true
  }
});

var Article = mongoose.model('Article', articleModel);
module.exports = Article;
