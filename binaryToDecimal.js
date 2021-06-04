function binaryToDecimal(string){ //"101"
  // add whatever parameters you deem necessary - good luck!
  let result = 0;
  for (i=0; i<string.length; i++){
    if (string[i] == "1"){
      let temp = 0;
      temp = string[i] * 1 * Math.pow(2,string.length*1-i-1)
      result += temp;
    }
    
  } return result;
}