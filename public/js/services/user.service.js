(function(){
  angular.module('clueless').factory('UserService', UserService);

  UserService.$inject = ['$http', '$window'];

  function UserService($http, $window){
    const base = '/users'
    var users = [];
    var localStorage = $window.localStorage;

    function signup(user){
      return $http.post('/signup', user)
                  .then(function(response){
                    return response;
                  })
    }
    function login(user){
      return $http.post('/login', user)
                  .then(function(response){
                    var token = response.data.token;
                    saveToken(token);
                  });
    }
    function getAllUsers(){
      return $http.get(base)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function getOneUser(user){
      var url = `${base}/${user._id}`;
      return $http.get(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function updateUser(user){
      var url = `${base}/${user._id}`;
      return $http.put(url, user)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function deleteUser(user){
      var url = `${base}/${user._id}`;
      return $http.delete(url)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function currentUser(){
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          _id: payload._id,
          email: payload.email
        }
      } else {
        return null;
      }
    }
    function saveToken(token){
      localStorage.setItem('clueless-token', token);
    }
    function getToken(){
      return localStorage.getItem('clueless-token');
    }
    function isLoggedIn(){
      var token = getToken();
      var payload;
      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        var isExpired = payload.exp < Date.now() / 1000;
        if(isExpired){
          logout();
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
    function logout(){
      localStorage.removeItem('clueless-token');
    }

    return{
      signup: signup,
      login: login,
      getAllUsers: getAllUsers,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      logout: logout
    }
  }
})()
