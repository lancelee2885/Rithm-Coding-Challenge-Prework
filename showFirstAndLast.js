function showFirstAndLast(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (i=0; i<arr.length; i++){
    let temp = "";
    temp = arr[i][0] + arr[i][arr[i].length-1];
    result.push(temp);
  } return result;
}