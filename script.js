
// shallow copy example 
let arr1=[2,5,8,9];
let arr2=[...arr1];

console.log(arr1);
console.log(arr2);

// Deep Copy Example
let orignalarr = [4,5,7,8,4];
let deepcopy = JSON.parse(JSON.stringify(orignalarr));
console.log(orignalarr); 
console.log(deepcopy);
