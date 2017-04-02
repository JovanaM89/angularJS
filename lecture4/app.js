(function(){
  'use strict';
  angular.module('nameCalculator',[]).
  controller('nameCalculatorController', function($scope){
    $scope.name='';
    $scope.totalNameValue = 0;
    $scope.displayNumeric = function(){
      var numeric = calculateNumericForString($scope.name);
      $scope.totalNameValue = numeric;
    };

    function calculateNumericForString(string){
      var totalStringValue = 0;
      for(var i=0; i<string.length; i++){
        totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();
