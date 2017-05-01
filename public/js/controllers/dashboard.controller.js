(function(){
  angular.module('clueless').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', 'ArticleService', '$location'];

  function DashboardController($scope, ArticleService, $location){
    $scope.articles = [];
    $scope.deleteArticle = deleteArticle;
    $scope.edit = edit;

    populateArticles();
    function populateArticles(){
      ArticleService.getAll()
                 .then(function(response){
                   $scope.articles = response.data.articles;
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    };

    function edit(article){
      var url = `/edit/${article._id}`;
      $location.path(url);
    }

    function deleteArticle(article){
      ArticleService.deleteArticle(article)
                    .then(populateArticles);
    }
  };
})()
