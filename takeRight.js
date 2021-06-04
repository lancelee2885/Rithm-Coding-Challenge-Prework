function takeRight(arr, value){
  // add whatever parameters you deem necessary - good luck!
  /*
takeRight([1, 2, 3]); // [3]
takeRight([1, 2, 3], 2); // [2, 3]
takeRight([1, 2, 3], 5); // [1, 2, 3]
takeRight([1, 2, 3], 0); // []
  */
  let newArr =[];

  if (typeof value != "number"){
    newArr.unshift(arr[arr.length-1]);
    return newArr;
  }

  for (i=1; i<=value; i++){
    if (value> arr.length){
      return arr;
    }
    newArr.unshift(arr.pop());
  }
  return newArr;


}