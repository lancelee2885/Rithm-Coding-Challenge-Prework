function inRange(num, start, end){
  // add whatever parameters you deem necessary - good luck!

  // If end is not specified, it’s set to start with start then set to 0. If start is greater than end the params are swapped.

  if (typeof end != "number"){
    let temp = 0;
    end = start;
    start = 0;
  }

  if (start > end){
    let temp = 0;
    temp = start;
    start = end;
    end = temp;
  }

  if (num > start && num < end){
    return true;
  }

  return false;

}