function addKeyAndValue(arr, key, value){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  arr.forEach(element => {element[key] = value
    result.push(element);
  });
  return result;
}