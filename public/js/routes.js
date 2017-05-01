(function() {
  angular.module('clueless')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'SignupController',
        templateUrl: 'html/views/signup.html',
        css: 'css/signup.css',
        access: {
          restricted: false
        }
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'html/views/login.html',
        css: 'css/login.css',
        access: {
          restricted: false
        }
      })
      .when('/closet', {
        controller: 'ClosetController',
        templateUrl: 'html/views/closet.html',
        css: 'css/closet.css',
        access: {
          restricted: true
        }
      })
      .when('/upload', {
        controller: 'UploadController',
        templateUrl: 'html/views/upload.html',
        css: 'css/upload.css',
        access: {
          restricted: false
        }
      })
      .when('/outfit-creator', {
        controller: 'OutfitController',
        templateUrl: 'html/views/outfit.html',
        css: 'css/outfit.css',
        access: {
          restricted: true
        }
      })
      .when('/edit/:articleId', {
        controller: 'EditController',
        templateUrl: 'html/views/edit.html',
        css: 'css/edit.css',
        access: {
          restricted: false
        }
      })
      .otherwise({
        redirectTo: '/',
        access: {
          restricted: false
        }
      });
  }
}());
