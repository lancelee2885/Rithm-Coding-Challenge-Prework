function hasCertainValue(arr,key,value){
  // add whatever parameters you deem necessary - good luck!
  let check = (obj) => obj[key] == value;
  return arr.every(check);
  
}