(function(){
  'use strict';

  var shoppingList1 = ['item1', 'item2', 'it1m3', 'item4','item5'
                        , 'item6', 'item7', 'item8'];
  var shoppingList2 = [
    {
      name : "ITEM1",
      quantity : '3'
    },
    {
      name : "ITEM2",
      quantity : '1'
    },
    {
      name : "ITEM3",
      quantity : '1'
    },
    {
      name : "ITEM4",
      quantity : '2'
    }
  ];
  angular.module('ShoppingListApp',[]).
  controller('ShoppingListController',ShoppingListController);

  ShoppingListController.$inject = ['$scope'];

  function ShoppingListController($scope){
      $scope.shoppingList1 = shoppingList1;
      $scope.shoppingList2 = shoppingList2;
      $scope.addToList = function (){
        var newItem = {
          name : $scope.newItemName,
          quantity : $scope.newItemQuantity
        };
        $scope.shoppingList2.push(newItem);
      };
  }

})();
