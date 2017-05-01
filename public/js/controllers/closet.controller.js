(function(){
  angular.module('clueless').controller('ClosetController', ClosetController);

  ClosetController.$inject = ['$scope', 'ArticleService', '$location'];

  function ClosetController($scope, ArticleService, $location){
    $scope.articles = [];
    $scope.deleteArticle = deleteArticle;
    $scope.edit = edit;
    $scope.openNav = openNav;
    $scope.closeNav = closeNav;
    $scope.display = display;
    $scope.isExpanded = false;

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

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("push").style.marginLeft = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("push").style.marginLeft= "0";
    }

    function display() {
      $scope.isExpanded = !$scope.isExpanded;

    }

  };
})()
