(function() {

  'use strict';

  angular
    .module('timeTracker')
    .controller('User', User);

    function User(user, $scope) {
      // vm is our capture variable
      var um = this;

      um.users = [];

      function getUsers() {
        user.getUsers().then(function(result) {
          um.users = result;
        }, function(error) {
          console.log(error);
        })
      }

      // Submits the user that will be called
      // when we click the "Add user" button
      um.logNewUser = function() {

        // Call to the saveUser method on the user service to save the new user entry to the database
        user.saveUser({
          "first_name": um.first_name,
          "last_name": um.last_name,
          "email": "email",
          "password": "password"
        }).then(function(success) {
          getUsers();
          console.log(success);
        },function(error) {
          console.log(error);
        });

        // Clear the user fields
        um.first_name = "";
        um.last_name = "";
        um.email = "";
        um.password = "";
      }

      // vm.updateTimeEntry = function(timeentry) {
      //
      //   // Collect the data that will be passed to the updateTime method
      //   var updateTimeEntry = {
      //     "id":timeentry.id,
      //     "user_id":timeentry.user.id,
      //     "start_time": timeentry.start_time,
      //     "end_time": timeentry.end_time,
      //     "comment":timeentry.comment
      //   }
      //
      //   // Update the time entry and then refresh the list
      //   time.updateTime(updateTimeEntry).then(function(success) {
      //     getTimeEntries();
      //     $scope.showEditDialog = false;
      //     console.log(success);
      //   }, function(error) {
      //     console.log(error);
      //   });
      // }
      //
      // // Specify the time entry to be deleted and pass it to the deleteTime method on the time service
      // vm.deleteTimeEntry = function(timeentry) {
      //   var id = timeentry.id;
      //
      //   time.deleteTime(id).then(function(success) {
      //     getTimeEntries();
      //     console.log(success);
      //   }, function(error) {
      //     console.log(error);
      //   })
      // }
    }

})();
