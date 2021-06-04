function greatestCommonDivisor(num1 , num2){
  // add whatever parameters you deem necessary - good luck!
  let divisor = 0;
  for (i=0; i<num2; i++){
    if (num1%i === 0 && num2%i ===0){
      divisor = i;
    }
  } return divisor;
}