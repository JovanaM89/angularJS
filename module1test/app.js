(function(){
  'use strict';
  angular.module('LunchCheck',[]).
  controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.food = '';
    $scope.number = 0;
    $scope.message = '';
    $scope.CheckIfTooMuchFood = function(){
      $scope.number = 0;
      if($scope.food===''){
        $scope.message = "Please enter data first";
      }
      else{
        for(var i=0; i<$scope.food.length; i++){
          if($scope.food.charAt(i)===','){
            $scope.number += 1;
        }
      }
      $scope.number += 1;
      if($scope.number<=3){
        $scope.message ="Enjoy!";
      }
      if($scope.number>3){
        $scope.message="Too much!";
      }
      }
    };
  }
})();
