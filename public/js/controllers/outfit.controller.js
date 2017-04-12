(function(){
  angular.module('clueless').controller('OutfitController', OutfitController);

  OutfitController.$inject = ['$scope', 'ArticleService'];

  function OutfitController($scope, ArticleService){
    $scope.previousImage = previousImage;
    $scope.nextImage = nextImage;
    $scope.currentIndex = 0;
    $scope.slides = [];
    $scope.getByCategory = getByCategory;
    $scope.getSlides = getSlides;

    getSlides();
    function getSlides(){
      ArticleService.getAll()
                    .then(function(response){
                      imageData = response.data.articles;
                      for (var i = 0; i < imageData.length; i++){
                        $scope.slides.push(`${imageData[i].image}`);
                      };
                      document.getElementById('shirt').src = $scope.slides[$scope.currentIndex];
                    })
                    .catch(function(err){
                      console.log(err);
                    });
    }

    function getByCategory(category){
      ArticleService.getByCategory(category)
                    .then(function(response){
                      var thing = response.data.articles;
                      console.log(thing);
                    })
                    .catch(function(err){
                      console.log(err);
                    });
    }

    function previousImage(){
      if ($scope.currentIndex == 0){
        $scope.currentIndex = $scope.slides.length - 1;
      } else {
        $scope.currentIndex -= 1;
      };
      document.getElementById('shirt').src = $scope.slides[$scope.currentIndex];
      // console.log($scope.currentIndex);
    };


    function nextImage(){
      if ($scope.currentIndex == $scope.slides.length - 1){
        $scope.currentIndex = 0;
      } else {
        $scope.currentIndex += 1;
      };
      document.getElementById('shirt').src = $scope.slides[$scope.currentIndex];
      console.log($scope.currentIndex);
    }
  }
})()
