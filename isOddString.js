function isOddString(string){
  // add whatever parameters you deem necessary - good luck!/
  // sum of each character's position in the alphabet is odd
  // a is 1, b is 2 ...
  // every odd alphabet is 1
  // every even alphabet is 2

  let result = 0;
  for (i=0; i<string.length; i++){
    result += string[i].charCodeAt();
  }

  if (result%2 != 0){
    return true;
  }
  return false;
}

