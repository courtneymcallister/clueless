(function() {
  angular.module('clueless')
         .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'UserService'];

  function SignupController($scope, UserService){
    $scope.newUser = {};
    $scope.signup = signup;

    function signup(user){
      UserService.signup(user)
                  .then(function(response){
                    $scope.newUser = {};
                    console.log('success');

                  })
                  .catch(function(err){
                    console.log(err);
                    $scope.newUser.password = '';
                  });
    }
  }
}());
