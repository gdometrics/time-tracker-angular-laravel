(function() {

  'use strict';

  angular
    .module('timeTracker')
    .controller('TimeEntry', TimeEntry);

    function TimeEntry(time, user, $scope) {
      // vm is our capture variable
      var vm = this;

      vm.timeentries = [];
      vm.totalTime = {};
      vm.users = [];

      // Initialize the clockIn and clockOut times to the current time.
      vm.clockIn = moment();
      vm.clockOut = moment();

      // Grab all the time entries saved in the database
      getTimeEntries();

      // Get the users from the database so we can select who the time entry belongs to
      getUsers();

      function getUsers() {
        user.getUsers().then(function(result) {
          vm.users = result;
        }, function(error) {
          console.log(error);
        })
      }

      // Fetches the time entries and puts the results on the vm.timeentries array
      function getTimeEntries() {
        time.getTime().then(function(results) {
          vm.timeentries = results;
          updateTotalTime(vm.timeentries);
          console.log(vm.timeentries);
        }, function(error) { // Check for errors
          console.log(error);
        });
      }

      // Updates the values in the total time box by calling the
      // getTotalTime method on the time services
      function updateTotalTime(timeentries) {
        vm.totalTime = time.getTotalTime(timeentries);
      }

      // Submits the time entry that will be called
      // when we click the "Log Time" button
      vm.logNewTime = function() {

      // Make sure that the clock-in time isn't after the clock-out time.
      if(vm.clockOut < vm.clockIn) {
       alert("You can't clock out before you clock in!");
       return;
      }

      // Make sure the time entry is greater than zero
      if(vm.clockOut - vm.clockIn === 0) {
          alert("Your time entry has to be greater than zero!");
          return;
      }

      vm.timeentries.push({
        "user_id":1,
        "user_firstname":"Ryan",
        "user_lastname":"Chenkie",
        "start_time":vm.clockIn,
        "end_time":vm.clockOut,
        "loggedTime": time.getTimeDiff(vm.clockIn, vm.clockOut),
        "comment":vm.comment
      });

      updateTotalTime(vm.timeentries);

      vm.comment = "";
    }
  }

})();
