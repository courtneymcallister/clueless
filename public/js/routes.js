(function() {
  angular.module('clueless')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'html/views/signup.html',
      })
      .otherwise({
        redirectTo: '/',
      });
  }
}());
