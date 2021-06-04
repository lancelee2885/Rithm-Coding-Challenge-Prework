function extractValue(arr,key){
  // add whatever parameters you deem necessary - good luck!
  let result =[];
  for (ele of arr){
    if (ele[key] != undefined){
      result.push(ele[key])
    }
  }
  return result;
}