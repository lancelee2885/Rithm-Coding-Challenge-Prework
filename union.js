function union(){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for(i=0; i<arguments.length; i++){
    console.log(arguments[i]);
    for (j=0; j<arguments[i].length; j++){
      if (result.includes(arguments[i][j]) == false ){
        result.push(arguments[i][j]);
      }
    }
  } return result;
}