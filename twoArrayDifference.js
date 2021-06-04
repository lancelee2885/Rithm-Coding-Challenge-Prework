function twoArrayDifference(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (i=0; i<arr1.length; i++){
    if (!(arr2.includes(arr1[i]))){
      result.push(arr1[i]);
    }
  }
  return result;

}