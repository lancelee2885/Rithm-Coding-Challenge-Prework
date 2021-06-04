function drop(arr, num){
  // add whatever parameters you deem necessary - good luck!
  // if num is empty > drop first element
  // drop num of items from the beginning
  // if num > arr.length --> drop all items
  // if num is 0 --> drop no itme
  // drop returns new arr.

  let resultArr = arr.slice();

  if (typeof num == "number"){
    if (num == 0){
      return resultArr;
    }
    if (num > arr.length){
      return [];
    }
    for (let i=1; i<=num; i++){
      resultArr.shift();
    }
    return resultArr;

  }

  resultArr.shift();
  return resultArr;


}