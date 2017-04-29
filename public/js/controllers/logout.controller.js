(function() {
    angular.module('clueless')
           .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$scope', 'UserService', '$location'];

    function LogoutController($scope, UserService, $location){
      $scope.logout = logout;

      function logout(){
        UserService.logout();
        $location.path('/');
      }
    }
}());
