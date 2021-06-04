function filterByKey(arr,key){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (target of arr){
    if (key in target){
      result.push(target);
    }
  }
  return result;
}