(function(){
  angular.module('clueless').controller('UploadController', UploadController);

  UploadController.$inject = ['$scope', 'ArticleService', 'UserService', '$http'];

  function UploadController($scope, ArticleService, UserService, $http){
    $scope.upload = upload;
    $scope.article = {};

    function upload(article){
      var file = document.querySelector("#uploadImage").files[0];
      var FR = new FileReader();
      FR.onload = function(e){
        article.file = e.target.result;
        $http.post('/save-details', article);
      }
      FR.readAsDataURL(file);
      console.log(article.file);
      // document.getElementById('preview').src = article.file;
    }


  };
})()
