function isPrime(num){
  // add whatever parameters you deem necessary - good luck!

  for (i=2; i<num; i++){
    if (num % i == 0){
      return false;
    }
  }

  return true;
}