function findInObj(arr,key,value){
  // add whatever parameters you deem necessary - good luck!
  for (target of arr){
    if (target[key] == value){
      return target;
    }
  }
  return undefined;
}