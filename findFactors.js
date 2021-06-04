function findFactors(num){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  for (i=1; i<=num; i++){
    if (num%i == 0){
      result.push(i);
    }
  } return result;
}