function extractKey(arr,value){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (key of arr){
    result.push(key[value]);
  }
  return result;
}