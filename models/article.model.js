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
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  brand:{
    type: String,
  },
  size:{
    type: String,
  },
  purchaseDate: {
    type: String,
  },
  notes: {
    type: String
  }
});

var Article = mongoose.model('Article', articleModel);
module.exports = Article;
