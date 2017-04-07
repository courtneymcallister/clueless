(function(){
  angular.module('clueless').factory('ArticleService', ArticleService);

  ArticleService.$inject = ['$http'];

  function ArticleService($http){
    const base = '/articles'
    var articles = [];

    function upload(article){
      return $http.post(base, article);

    }

    function getAll(){
      return $http.get(base);
    }
    function getOne(id){
      return $http.get(`${base}/${id}`)
                  .then(getAllArticles);
    }
    function update(id){
      return $http.put(`${base}/${id}`)
                  .then(getAllUsers);
    }
    function deleteArticle(article){
      var url = `${base}/${article._id}`;
      return $http.delete(url);
    }

    return{
      upload: upload,
      getAll: getAll,
      getOne: getOne,
      update: update,
      deleteArticle: deleteArticle
    }
  }
})()
