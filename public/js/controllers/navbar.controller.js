(function(){
  angular.module('clueless').controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'UserService'];

  function NavbarController($scope, UserService){
    $scope.isLoggedIn = UserService.isLoggedIn;
  };
})()
