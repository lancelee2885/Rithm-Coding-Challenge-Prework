function rangeInArray(arr, start, end){
  // add whatever parameters you deem necessary - good luck!

/*
rangeInArray([1, 2, 3, 4], 0, 2); // 6
rangeInArray([1, 2, 3, 4], 0, 3); // 10
rangeInArray([1, 2, 3, 4], 1); // 9
rangeInArray([1, 2, 3, 4]); // 10
rangeInArray([1, 2, 3, 4], 0, 100); // 10
rangeInArray([], 0, 1); // 0
*/
  let result = 0;

  if (typeof end == "number"){
    if (end >= arr.length){ end = arr.length-1};
    for (i=start; i<=end; i++){
      result += arr[i];
    }
    return result;
  }

  if (typeof start == "number"){
    for (i=start; i<arr.length; i++){
      result += arr[i];
    }
    return result;
  }
  
  for (i=0; i<arr.length; i++){
    result += arr[i];
  }
  return result;
}