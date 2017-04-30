(function(){
  angular.module('clueless').controller('UploadController', UploadController);

  UploadController.$inject = ['$scope', 'UserService', '$http', '$location'];

  function UploadController($scope, UserService, $http, $location){
    $scope.upload = upload;
    $scope.article = {};
    $scope.saveImage = saveImage;
    $scope.categories = ['Shirt', 'Pants']

    function upload(article){
      var file = document.querySelector("#uploadImage").files[0];
      var FR = new FileReader();
      FR.onload = function(e){
        article.file = e.target.result;
        $http.post('/save-details', article);
        document.getElementById('preview').src = article.file;
      }
      FR.readAsDataURL(file);

    }

    function saveImage(article){
      var userId = UserService.currentUser()._id;
      article.owner = userId;
      article.image = document.getElementById('preview').src;
      $http.post('/articles', article)
           .then(function(){
             $location.path('/dashboard');
           })
           .catch(function(err){
             console.log(err);
           });
    }


  };
})()
