function keyCount(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = {};
  for (key of arr){
    for (value in key){
      if (value in result != true){
        result[value] = 1;
      } else {result[value] += 1;}
    }
  }
  return result;
}