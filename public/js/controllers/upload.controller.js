(function(){
  angular.module('clueless').controller('UploadController', UploadController);

  UploadController.$inject = ['$scope'];

  function UploadController($scope){
    $scope.upload = upload;

    function upload(url){
      console.log('uploading image');
    }
  };
})()
