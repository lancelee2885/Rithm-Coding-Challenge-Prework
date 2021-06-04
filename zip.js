function zip(){
  // add whatever parameters you deem necessary - good luck!
  let totalArr =[];
  let result = [];
  for (i=0; i<arguments.length; i++){
    totalArr.push(arguments[i]);
  }
  for (j=0; j<totalArr[0].length; j++){
    let temp = [];
    for (k=0; k<totalArr.length; k++){
      temp.push(totalArr[k][j]);
    } 
    result.push(temp);
  }
  return result;

}