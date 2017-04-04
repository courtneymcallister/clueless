(function(){
  angular.module('clueless').controller('UploadController', UploadController);

  UploadController.$inject = ['$scope', 'ArticleService', 'UserService'];

  function UploadController($scope, ArticleService, UserService){
    $scope.upload = upload;

    function upload(article){
      console.log('yay');
    }
  };
})()
