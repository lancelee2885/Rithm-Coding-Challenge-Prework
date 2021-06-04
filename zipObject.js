function zipObject(stringArr, numArr){
  // add whatever parameters you deem necessary - good luck!
  let obj ={};
  for (i=0; i<stringArr.length; i++){
    obj[stringArr[i]] = numArr[i]; 
  }
  return obj;

}