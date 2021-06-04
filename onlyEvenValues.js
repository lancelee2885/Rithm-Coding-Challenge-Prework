function onlyEvenValues(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (i=0; i<arr.length; i++){
    if (arr[i] % 2 == 0){
      result.push(arr[i])
    }
  } return result;
}