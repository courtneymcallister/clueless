(function(){
  angular.module('clueless').controller('OutfitController', OutfitController);

  OutfitController.$inject = ['$scope', 'ArticleService'];

  function OutfitController($scope, ArticleService){
    $scope.previousImage = previousImage;
    $scope.nextImage = nextImage;
    $scope.currentIndex = 0;
    $scope.tops = [];
    $scope.bottoms = [];
    $scope.getSlides = getSlides;

    getSlides();
    function getSlides(){
      ArticleService.getAll()
                    .then(function(response){
                      imageData = response.data.articles;
                      for (var i = 0; i < imageData.length; i++){
                        if (imageData[i].category == "shirt"){
                          $scope.tops.push(`${imageData[i].image}`);
                        } else if (imageData[i].category == 'pants'){
                          $scope.bottoms.push(`${imageData[i].image}`);
                        }
                      };
                      console.log($scope.tops);
                      console.log($scope.bottoms);
                      document.getElementById('shirt').src = $scope.tops[$scope.currentIndex];
                      document.getElementById('pants').src = $scope.bottoms[$scope.currentIndex];
                    })
                    .catch(function(err){
                      console.log(err);
                    });
    }

    function previousImage(loc){
      if ($scope.currentIndex == 0){
        $scope.currentIndex = $scope.slides.length - 1;
      } else {
        $scope.currentIndex -= 1;
      };
      document.getElementById('image').src = $scope.slides[$scope.currentIndex];
      // console.log($scope.currentIndex);
    };


    function nextImage(loc){
      if ($scope.currentIndex == $scope.slides.length - 1){
        $scope.currentIndex = 0;
      } else {
        $scope.currentIndex += 1;
      };
      document.getElementById('image').src = $scope.slides[$scope.currentIndex];
      console.log($scope.currentIndex);
    }
  }
})()
