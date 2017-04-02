var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number array: ", numberArray);

function above5Filter(value){
  return value>5;
}
var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);

var shoppingList = ['item1', 'item2', 'item3', 'item4','item5'
                      , 'item6', 'item7', 'item8'];

console.log("Shopping list: ", shoppingList);

var searchValue='item3';
function containsFilter(value){
  return value.indexOf(searchValue) !==-1;
}

var searchShoppingList = shoppingList.filter(containsFilter);
console.log("Serached shopping list: ", searchShoppingList);
