function upperFirst(string){
  // add whatever parameters you deem necessary - good luck!
  
  if (string[0] == undefined){
    return string;
  }

  if (string[0].toUpperCase() != string[0]){
    arr = string.split("");
    arr.splice(0,1,string[0].toUpperCase());
    return arr.join("");
  }

  return string;
}