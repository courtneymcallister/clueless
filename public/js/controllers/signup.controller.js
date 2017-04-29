(function() {
  angular.module('clueless')
         .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'UserService', '$location'];

  function SignupController($scope, UserService, $location){
    $scope.newUser = {};
    $scope.signup = signup;

    function signup(user){
      UserService.signup(user)
                  .then(function(response){
                    $scope.newUser = {};
                    $location.path('/dashboard')
                  })
                  .catch(function(err){
                    console.log(err);
                    $scope.newUser.password = '';
                  });
    }
  }
}());
