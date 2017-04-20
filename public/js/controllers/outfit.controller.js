(function(){ //i realize this is crazy inefficient and redundant
  angular.module('clueless').controller('OutfitController', OutfitController);

  OutfitController.$inject = ['$scope', 'ArticleService'];

  function OutfitController($scope, ArticleService){
    $scope.previousTop = previousTop;
    $scope.nextTop = nextTop;
    $scope.currentTopIndex = 0;
    $scope.getTops = getTops;
    $scope.tops = [];

    $scope.previousBottom = previousBottom;
    $scope.nextBottom = nextBottom;
    $scope.currentBottomIndex = 0;
    $scope.getBottoms = getBottoms;
    $scope.bottoms = [];

    getTops();
    function getTops(){
      ArticleService.getAll()
                    .then(function(response){
                      imgData = response.data.articles;
                      for(var q = 0; q < imgData.length; q++){
                        if (`${imgData[q].category}` == 'Shirt'){
                          console.log('shirt');
                          $scope.tops.push(`${imgData[q].image}`);
                        };
                      };
                      document.getElementById('tops').src = $scope.tops[$scope.currentTopIndex];
                    })
                    .catch(function(err){
                      console.log(err);
                    });
    }

    function previousTop(){
      if ($scope.currentTopIndex == 0){
        $scope.currentTopIndex = $scope.tops.length - 1;
      } else {
        $scope.currentTopIndex -= 1;
      };
      document.getElementById('tops').src = $scope.tops[$scope.currentTopIndex];
    };


    function nextTop(){
      if ($scope.currentTopIndex == $scope.tops.length - 1){
        $scope.currentTopIndex = 0;
      } else {
        $scope.currentTopIndex += 1;
      };
      document.getElementById('tops').src = $scope.tops[$scope.currentTopIndex];
    }

    getBottoms();
    function getBottoms(){
      ArticleService.getAll()
                    .then(function(response){
                      imgData = response.data.articles;
                      for(var q = 0; q < imgData.length; q++){
                        if (`${imgData[q].category}` == 'Pants'){
                          $scope.bottoms.push(`${imgData[q].image}`);
                        };
                      };
                      document.getElementById('bottoms').src = $scope.bottoms[$scope.currentBottomIndex];
                    })
                    .catch(function(err){
                      console.log(err);
                    });
    }

    function previousBottom(){
      if ($scope.currentBottomIndex == 0){
        $scope.currentBottomIndex = $scope.bottoms.length - 1;
      } else {
        $scope.currentBottomIndex -= 1;
      };
      document.getElementById('bottoms').src = $scope.bottoms[$scope.currentBottomIndex];
    };


    function nextBottom(){
      if ($scope.currentBottomIndex == $scope.bottoms.length - 1){
        $scope.currentBottomIndex = 0;
      } else {
        $scope.currentBottomIndex += 1;
      };
      document.getElementById('bottoms').src = $scope.bottoms[$scope.currentBottomIndex];
    }
  }
})()
