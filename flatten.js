function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  //

  let newArr = [];
  for (i=0; i<arr.length; i++){
    if (typeof arr[i] == "object"){
      for (j=0; j<arr[i].length; j++){
        newArr.push(arr[i][j]);
      }
    } else{
      newArr.push(arr[i]);
      }
  }
  return newArr;
}