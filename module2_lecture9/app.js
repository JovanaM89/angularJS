(function(){
  'use strict';

  angular.module('ShoppingListApp',[]).
  controller('ShoppingListAddController',ShoppingListAddController).
  controller('ShoppingListShowController',ShoppingListShowController).
  service('ShoppingListService',ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService'];

  function ShoppingListAddController(ShoppingListService){
      var itemAdder = this;
      itemAdder.name = '';
      itemAdder.quantity = '';
      itemAdder.addItem = function (){
        ShoppingListService.addItem(itemAdder.name, itemAdder.quantity);
      };
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];

  function ShoppingListShowController(ShoppingListService){
    var showList = this;
    showList.items = ShoppingListService.getItems();
    showList.remove = function(itemIndex){
      ShoppingListService.remove(itemIndex);
    };
  }

  function ShoppingListService(){
    var service = this;
    var items = [];
    service.addItem = function(name, quantity){
      var item = {
        name : name,
        quantity : quantity
      };
      items.push(item);
    };

    service.getItems = function(){
      return items;
    };

    service.remove = function(itemIndex){
      items.splice(itemIndex,1);
    };
  }


})();
