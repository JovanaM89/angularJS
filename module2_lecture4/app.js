(function(){
  'use strict';
  angular.module('BindingApp',[]).
  controller('BindingController', BindingController);

  BindingController.$inject = ['$scope'];

  function BindingController($scope){
    $scope.firstName = 'Jovana';
  //  $scope.fullName = '';
    $scope.showNumberOfWatchers = function(){
      console.log("# num of watchers: " + $scope.$$watchersCount);
    };
    $scope.setFullName = function(){
      $scope.fullName= $scope.firstName + " Miljkovic";
    };
    $scope.logFirstName = function(){
      console.log("First name: " + $scope.firstName);
    };
    $scope.logFullName = function(){
      console.log("Full name: " + $scope.fullName);
    };
  }
})();
