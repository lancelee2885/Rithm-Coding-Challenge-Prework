function createMatrix(n,m){
  // add whatever parameters you deem necessary - good luck!
  let matrix = [];
  
  for (row = 1; row <= m; row ++){
    let temp = [];
    for (column = 1; column <= n; column ++){
      temp.push(0);
    }
    matrix.push(temp);
  }
  return matrix;


}