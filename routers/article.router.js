const express = require('express');
const Article = require('../models/article.model');
const router = express.Router();

//GET /articles
router.get('/articles', function(req, res){
  Article.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        articles: documents
      });
    }
  });
});

//GET /articles/:id
router.get('/articles/:id', function(req, res){
  Article.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        articles: documents
      });
    }
  });
});

//GET /articles/:category
router.get('/articles/:categoryName', function(req, res){
  Article.find({category: req.params.categoryName}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        articles: documents
      });
    }
  });
});

//POST /articles
router.post('/articles', function(req, res){
  var newArticle = new Article(req.body);
  newArticle.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'new article added'
      });
    }
  });
});

//PUT /articles/:id
router.put('/articles/:id', function(req, res){
  Article.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'successfully updated'
      });
    }
  });
});

//DELETE /articles/:id
router.delete('/articles/:id', function(req, res){
  Article.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'successfully deleted'
      });
    }
  });
});

module.exports = router;
