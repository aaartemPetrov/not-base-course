let obj = { name: 'name'};
//Under the hood it is looks like:
obj = new Object({ name: 'name'});

//every object have a parent Object
//Object have prototype property and some methods like toString()
console.log(obj);
console.log(obj.__proto__);

//we can add functions and properties to Object and then can use them in every child
Object.prototype.someFunction = function() {
    console.log('Some prototype function that is called from child.');
}
obj.someFunction();

Object.prototype.someProperty = 'prototype property';
console.log(obj.someProperty);

//we can create obj with prototype
let newObj = Object.create(obj);
newObj.name = 'newObjName'
//now we have new empty object with obj prototype that contains Object prototype
console.log(newObj.name);
console.log(newObj.__proto__.name);
console.log(newObj.__proto__.__proto__);

let str = 'str';
//Under the hood it is look like:
str = new String('str');

//string has a chars and length properties + prototype with functions and Object prototype
console.log(str.length);
console.log(str.__proto__.__proto__);
str.someFunction();

//array
Array.prototype.multiply = function(multiplier) {
    return this.map(element => element * multiplier);
}
console.log([1,2,3,4,5].multiply(10));
let array = [30, 4, -5];
console.log(array.multiply(10));