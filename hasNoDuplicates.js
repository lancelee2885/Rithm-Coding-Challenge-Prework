function hasNoDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  let dup = (elements, index) => arr.indexOf(elements) == index;
  return arr.every(dup);
  
}