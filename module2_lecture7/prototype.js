/*
var parent = {
  value : "parentValue",
  obj : {
    objectValue : "parentObjectValue"
  },
  walk : function(){
    console.log("Walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value );
console.log("CHILD - child.obj.objectValue: ", child.obj.objectValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objectValue: ", parent.obj.objectValue);
console.log("parent: ",parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objectValue = 'childObjectValue';
console.log("*** CHILD - child.value: ", child.value );
console.log("*** CHILD - child.obj.objectValue: ", child.obj.objectValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objectValue: ", parent.obj.objectValue);
console.log("parent: ",parent);
console.log("*** child: ", child);

console.log("parent.obj === child.obj ?",parent.obj === child.obj);
console.log('parent.value===child.value ?', parent.value===child.value);

var grandChild = Object.create(child);
console.log("GrandChild: ", grandChild);
grandChild.walk();
*/

function Dog(name){
  this.name = name;
  console.log("'this' is : ", this);
}

var myDog = new Dog('Max');
console.log("myDog: ", myDog);

Dog("Max2");
