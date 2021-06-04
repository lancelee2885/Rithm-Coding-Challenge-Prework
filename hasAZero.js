function hasAZero(num){
  // add whatever parameters you deem necessary - good luck!
  

  let zero = (elements) => elements == 0;
  return (String(num).split("").some(zero))
}