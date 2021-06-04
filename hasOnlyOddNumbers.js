function hasOnlyOddNumbers(arr){
  // add whatever parameters you deem necessary - good luck!
  let onlyOdd = (elements) => elements%2 != 0;
  return arr.every(onlyOdd);
}