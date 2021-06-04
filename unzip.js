function unzip(arr){
  // add whatever parameters you deem necessary - good luck!

  let result = [];

  for (i=0; i<arr[0].length; i++){
    let temp = []
    for (j=0; j<arr.length; j++){
      temp.push(arr[j][i]);

    }
    result.push(temp);
    temp = [];
  } return result
} 
