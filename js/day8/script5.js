var fruits=["apple","banana","mango","orange","papaya"];
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("pineapple"));

var arr=[1,0,3,1,false,5,1,4,7];
console.log(arr.indexOf(1,2));
console.log(arr.lastIndexOf(1,2));

var arr=[1,0,3,1,false,5,1,4,7];
console.log(arr.includes(1));
console.log(arr.includes(6));
console.log(arr.includes(1,2));
console.log(arr.includes(3,4));


var arr=[1,0,3,1,false,5,1,4,7];
var result=arr.find(function(element){return element > 4;});
console.log(result);

var arr=[1,0,3,1,false,5,1,4,7];