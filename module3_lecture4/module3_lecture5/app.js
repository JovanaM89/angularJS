(function(){
  'use strict';

  angular.module('ShoppingListApp',[]).
  controller('ShoppingListController1',ShoppingListController1).
  controller('ShoppingListController2',ShoppingListController2).
  factory('ShoppingListFactory',ShoppingListFactory).
  directive('shoppingList', ShoppingList);

  function ShoppingList(){
    var ddo = {
      templateUrl : 'shoppingList.html',
      scope : {
        list : 'myList',
        title : '@title'
      };
    };
    return ddo;
  }

  ShoppingListController1.$inject = ['ShoppingListFactory'];

  function ShoppingListController1(ShoppingListFactory){
      var list1 = this;
      var shoppingList = ShoppingListFactory();
      list1.items = shoppingList.getItems();
      list1.itemName = '';
      list1.itemQuantity = '';
      var origTitle ='Shopping List #1';
      list1.title = origTitle + ' (' + list1.items.length + ' items)';
      list1.addItem = function (){
        shoppingList.addItem(list1.itemName, list1.itemQuantity);
          list1.title = origTitle + ' (' + list1.items.length + ' items)';
      };

      list1.remove = function(itemIndex){
        shoppingList.remove(itemIndex);
          list1.title = origTitle + ' (' + list1.items.length + ' items)';
      };
  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];

  function ShoppingListController2(ShoppingListFactory){
    var list2 = this;
    var shoppingList = ShoppingListFactory(3);
    list2.items = shoppingList.getItems();
    list2.itemName = '';
    list2.itemQuantity = '';

    list2.addItem = function (){
      try{
        shoppingList.addItem(list2.itemName, list2.itemQuantity);
      }catch(error){
        list2.errorMessage = error.message;
      }
    };

    list2.remove = function(itemIndex){
      shoppingList.remove(itemIndex);
    };
  }

  function ShoppingListService(maxItems){
    var service = this;
    var items = [];
    service.addItem = function(name, quantity){
      if((maxItems===undefined) || (maxItems!==undefined) && (items.length<maxItems)){
      var item = {
        name : name,
        quantity : quantity
      };
      items.push(item);
    }
      else{
        throw new Error("Max items: (" + maxItems + ") reached." );
      }
    };

    service.getItems = function(){
      return items;
    };

    service.remove = function(itemIndex){
      items.splice(itemIndex,1);
    };
  }

  function ShoppingListFactory() {
    var factory = function(maxItems){
      return new ShoppingListService(maxItems);
    };
    return factory;
  }


})();
