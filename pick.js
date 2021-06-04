function pick(obj, arr){
  // add whatever parameters you deem necessary - good luck!
  let newObj = {};

  for (i=0; i<arr.length; i++){
    if (arr[i] in obj){
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;

}