(function(){
  'use strict';
  angular.module('CounterApp',[]).
  controller('CounterController', CounterController);

  CounterController.$inject = ['$scope'];

  function CounterController($scope){
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = 'Jovana';
    $scope.$watch(function(){
      console.log("Digest function fired!");
    });
    $scope.upCounter = function(){
      $scope.counter++;
    };
    $scope.showNumberOfWatchers = function(){
      console.log($scope.$$watchersCount);
    };
    $scope.countOnce = function(){
      $scope.onceCounter = 1;
    };
    /*
    $scope.$watch('onceCounter', function (newValue, oldValue) {
      console.log("OnceCounter old value: "+oldValue);
      console.log("OnceCounter new value: "+newValue);
    });
    $scope.$watch('counter', function (newValue, oldValue) {
      console.log("Counter old value: "+oldValue);
      console.log("Counter new value: "+newValue);
    });
    */
  }
})();
