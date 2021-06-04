function hammingDistance(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let result = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length == str2.length){
    for (i=0; i<str1.length; i++){
      if (str1[i] != str2[i]){
        result += 1
      }
    }
  } else {
    return "Input strings must have the same length."
  } return result;
}