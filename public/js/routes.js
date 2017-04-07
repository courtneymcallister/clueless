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
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/views/login.html'
      })
      .when('/dashboard', {
        controller: 'DashboardController',
        templateUrl: 'html/views/dashboard.html',
        css: 'css/dashboard.css'
      })
      .when('/upload', {
        controller: 'UploadController',
        templateUrl: 'html/views/upload.html'
      })
      .otherwise({
        redirectTo: '/',
      });
  }
}());
