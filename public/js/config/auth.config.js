(function() {
  angular.module('clueless').run(AuthConfig);

  AuthConfig.$inject = ['UserService', '$location', '$rootScope'];

  function AuthConfig(UserService, $location, $rootScope){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
      if(nextRoute.access.restricted && !UserService.isLoggedIn()){
        $location.path('/');
      }
    });
  }
}());
