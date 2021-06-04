function omit(obj, arr){
  // add whatever parameters you deem necessary - good luck!
  for (i=0; i<arr.length; i++){
    if (arr[i] in obj){
      delete obj[arr[i]];
    }
  }
  return obj;
  

}