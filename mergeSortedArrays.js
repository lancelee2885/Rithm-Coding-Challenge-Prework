function mergeSortedArrays(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!
  let arr3 = arr1.concat(arr2);
  let finish = false;
  while (!finish){
    finish = true;
    for (i=0; i<arr3.length; i++){
      if (arr3[i-1] > arr3[i]){
        finish = false;
        let temp = arr3[i-1];
        arr3[i-1] = arr3[i];
        arr3[i] = temp;
      }
    }
  }
  return arr3;
}