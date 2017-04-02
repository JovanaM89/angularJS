
(function(){
  'use strict';

  var shoppingList1 = ['item1', 'item2', 'item3', 'item4','item5'
                        , 'item6', 'item7', 'item8'];

  angular.module('ShoppingListApp',[]).
  controller('ShoppingListController',ShoppingListController);

  ShoppingListController.$inject = ['$scope'];

  function ShoppingListController($scope){
      $scope.shoppingList1 = shoppingList1;
      $scope.search = '';
  }

})();
