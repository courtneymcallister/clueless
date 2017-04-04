const mongoose = require('mongoose');

const articleModel = mongoose.Schema({
  image:{
    type: String //url stored somewhere else?
  },
  category:{
    type: String,
    required: true
  },
  owner:{
    type: String,
    required: true,
    ref: User
  }
});

var Article = mongoose.model('Article', articleModel);
module.exports = Article;
