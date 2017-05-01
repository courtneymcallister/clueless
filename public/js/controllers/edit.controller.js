(function(){
  angular.module('clueless').controller('EditController', EditController);

  EditController.$inject = ['$scope', 'ArticleService', '$location', '$routeParams'];

  function EditController($scope, ArticleService, $location, $routeParams){
    $scope.edit = edit;

    editInit();
    function editInit(){
      var id = $routeParams.articleId;
      ArticleService.getOne(id)
                  .then(function(response){
                    $scope.article = response.data.articles[0];
                  })
                  .catch(function(){
                    console.log('error');
                  });
    }

    function edit(article){
      ArticleService.update(article)
                    .then(function(res){
                      $location.path('/dashboard')
                    })
                    .catch(function(err){
                      console.log(err);
                    })
    }
  }
})()
