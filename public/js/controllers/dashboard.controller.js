(function(){
  angular.module('clueless').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', 'ArticleService'];

  function DashboardController($scope, ArticleService){
    $scope.articles = [];
    $scope.deleteArticle = deleteArticle;

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

    // function edit(post){
    //   var url = `/edit/${post._id}`;
    //   $location.path(url);
    // }
    function deleteArticle(article){
      ArticleService.deleteArticle(article)
        .then(populateArticles);
      }
  };
})()
