(function() {
  angular.module('clueless')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'html/views/signup.html',
        css: 'css/signup.css'
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/views/login.html',
        css: 'css/login.css'
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
      .when('/outfit-creator', {
        controller: 'OutfitController',
        templateUrl: 'html/views/outfit.html'
      })
      .when('/edit/:postId', {
        controller: 'EditController',
        templateUrl: 'html/views/edit.html'
      })
      .otherwise({
        redirectTo: '/',
      });
  }
}());
