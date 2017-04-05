(function(){
  angular.module('clueless').factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    const base = '/users'
    var users = [];

    function signup(user){
      return $http.post('/signup', user)
                  .then(getAllUsers)
    }
    function login(user){
      return $http.post('/login', user)
                  .then(getAllUsers)
    }
    function getAllUsers(){
      return $http.get(base)
                  .then(function(res){
                    users = res.data.users;
                  })
    }
    function getOneUser(user){
      return $http.get(`${base}/${user}`)
                  .then(getAllUsers);
    }
    function updateUser(user){
      return $http.put(`${base}/${user}`)
                  .then(getAllUsers);
    }
    function deleteUser(user){
      return $http.delete(`${base}/${user}`)
                  .then(getAllUsers);
    }

    return{
      signup: signup,
      login: login,
      getAllUsers: getAllUsers,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    }
  }
})()
