(function(){
  'use strict';
  angular.module('MsgApp',[]).
  controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];

  function MsgController($scope){
    $scope.name='Jovana';
    $scope.state='1';
    $scope.sayHello = function(){
      return "Tamo neki string";
    }
    $scope.changeImg = function(){
      $scope.state=2;
    }
  }
})();
