function clamp(num, lowerBound, upperBond){
  // add whatever parameters you deem necessary - good luck!
  // if num between lower and upper bond > num
  // return lower if num is less than lower,
  // return higher if num is larger than upper

  if (num >= lowerBound && num <= upperBond){
    return num;
  }

  if (num < lowerBound){
    return lowerBound;
  }

  if (num > upperBond){
    return upperBond;
  }

}