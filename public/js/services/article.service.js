(function(){
  angular.module('clueless').factory('ArticleService', ArticleService);

  ArticleService.$inject = ['$http', 'UserService'];

  function ArticleService($http, UserService){
    const base = '/articles'
    var articles = [];

    function upload(article){
      return $http.post(base, article);
    }

    function getAll(){
      var options = {
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`
        }
      }
      return $http.get(base, options);
    }
    function getByCategory(cat){
      return $http.get(`${base}/category/${cat}`);
    }
    function getOne(id){
      return $http.get(`${base}/${id}`)
                  .then(getAllArticles);
    }
    function update(id){
      var options = {
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`
        }
      }
      return $http.put(`${base}/${id}`)
                  .then(getAllUsers);
    }
    function deleteArticle(article){
      var options = {
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`
        }
      }
      var url = `${base}/${article._id}`;
      return $http.delete(url, options);
    }

    return{
      upload: upload,
      getAll: getAll,
      getByCategory: getByCategory,
      getOne: getOne,
      update: update,
      deleteArticle: deleteArticle
    }
  }
})()
