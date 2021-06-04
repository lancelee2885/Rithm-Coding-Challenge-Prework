function hasOddNumber(arr){
  // add whatever parameters you deem necessary - good luck!
  for (key of arr){
    if (key&2 != 0){
      return true
    }
  }
  return false;
}