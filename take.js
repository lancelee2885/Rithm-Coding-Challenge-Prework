function take(arr, value){
  // add whatever parameters you deem necessary - good luck!

  let resultingArr = [];

  if (typeof value == "number"){
    if (value >= arr.length){
      return arr;
    }

    if (value > 0){
      for (i=0; i<value; i++){
        resultingArr.push(arr[i]);
      }
      return resultingArr;
    } 

    return [];
  }

  resultingArr.push(arr[0]);
  return resultingArr

}