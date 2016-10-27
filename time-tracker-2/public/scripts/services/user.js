(function() {
  'use strict';

  angular
    .module('timeTracker')
    .factory('user', user);

    function user($resource, $rootScope) {

      // ngResource call to the API with id as a parameterized URL and setup for the update method
      var User = $resource('api/users/:id', {}, {
        update: {
          method: 'PUT'
        }
      });

      // Query the users and return the results
      function getUsers() {
        return User.query().$promise.then(function(results) {
          $rootScope.users = results;
          return results;
        }, function(error) {
          console.log(error);
        });
      }

      // Grab data passed from the view and send a POST request to the API to save the data
      function saveUser(data) {
        return User.save(data).$promise.then(function(success) {
          console.log(success);
        }, function(error) {
          console.log(error);
        });
      }

      // Use a PUT request to save the updated data passed in
      function updateUser(data) {
        return User.update({id:data.id}, data).$promise.then(function(success) {
          console.log(success);
        }, function(error) {
          console.log(error);
        });
      }

      // Send a DELETE request for a specific user entry
      function deleteUser(id) {
        return User.delete({id:id}).$promise.then(function(success) {
          console.log(success);
        }, function(error) {
          console.log(error);
        });
      }

      return {
          getUsers: getUsers,
          saveUser: saveUser,
          updateUser: updateUser,
          deleteUser: deleteUser
      }
    }
})();
