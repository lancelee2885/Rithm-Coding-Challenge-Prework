function hasCertainKey(arr, key){
  // add whatever parameters you deem necessary - good luck!
  
  let check = (elements) => key in elements;
  return arr.every(check);
}