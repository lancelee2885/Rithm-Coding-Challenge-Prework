function sameFrequency(num1, num2){
  // add whatever parameters you deem necessary - good luck!

/*
sameFrequency(551122, 221515); // true
sameFrequency(321142, 3212215); // false
sameFrequency(1212, 2211); // true 
*/

// make it an array > sort it > join > compare

num1 = num1.toString(); num2 = num2.toString();
let arr1 = [], arr2 = [];
for (i=0; i<num1.length; i++){
  arr1.push(num1[i]);
}
arr1.sort();
for (j=0; j<num2.length; j++){
  arr2.push(num2[j]);
}
arr2.sort();

result1 = arr1.join("");
result2 = arr2.join("");

if (result1 == result2){
  return true;
} return false

}