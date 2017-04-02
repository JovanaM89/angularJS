(function(){
  'use strict';
  angular.module('MsgApp',[]).
  controller('MsgController', MsgController).
  filter('loves', LovesFilter).
  filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];

  function MsgController($scope, $filter, lovesFilter){
    $scope.name='Jovana';
    $scope.state='1';
    $scope.angularCost = .89;
    $scope.sayHello = function(){
      var msg = "Jovana likes to eat healthy snacks!";
      var output = $filter('uppercase')(msg);
      return output;
    };
    $scope.sayLovesHello = function(){
      var msg = "Jovana likes to eat healthy snacks!";
      var output = lovesFilter(msg);
      return output;
    };
    $scope.changeImg = function(){
      $scope.state=2;
    };
  }

  function LovesFilter(){
    return function(input){
      input = input || '';
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter(){
    return function(input, target, replace){
      input = input || '';
      input = input.replace(target, replace);
      return input;
    };
  }
})();
