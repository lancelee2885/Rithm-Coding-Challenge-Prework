function sumUpDiagonals(arr){
  // add whatever parameters you deem necessary - good luck!

  // column 0 > row 0 and arr.length-1
  // column 1 > row 1 and arr.length-1-1
  // column 2 > row 2 and arr.length-1-1-1
  let result = 0;
  for (i=0; i<arr.length; i++){
    result = result + arr[i][i] + arr[i][arr[i].length-1-i];
  } return result;
}