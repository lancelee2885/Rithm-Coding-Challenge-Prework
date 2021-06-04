function extractFullName(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (key of arr){
    let temp = ""
    temp = temp + key["first"] + " " + key["last"]
    result.push(temp);
  }
  return result
}