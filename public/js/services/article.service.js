(function(){
  angular.module('clueless').factory('ArticleService', ArticleService);

  ArticleService.$inject = ['$http'];

  function ArticleService($http){
    const base = '/articles'
    var articles = [];

    function upload(article){
      return $http.post(base, article);

    }

    function getAllArticles(){
      return $http.get(base)
                  .then(function(res){
                    articles = res.data.articles;
                  })
    }
    function getOneArticle(id){
      return $http.get(`${base}/${id}`)
                  .then(getAllArticles);
    }
    function updateArticle(id){
      return $http.put(`${base}/${id}`)
                  .then(getAllUsers);
    }
    function deleteArticle(id){
      return $http.delete(`${base}/${id}`)
                  .then(getAllUsers);
    }

    return{
      upload: upload,
      getAllArticles: getAllArticles,
      getOneArticle: getOneArticle,
      updateArticle: updateArticle,
      deleteArticle: deleteArticle
    }
  }
})()
