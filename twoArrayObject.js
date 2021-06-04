function twoArrayObject(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!
  let obj = {};
  for (i=0; i<arr1.length; i++){
    if (arr2[i] != undefined){  
    obj[arr1[i]] = arr2[i]
    } else {
      obj[arr1[i]] = null;
    }
  } return obj;
}