function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let obj1 = {}, obj2 = {};

  for (i=0; i<str1.length; i++){
    if (!(str1[i] in obj1)){
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] += 1;
    }
  }

  for (j=0; j<str2.length; j++){
    if (!(str2[j] in obj2)){
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]] += 1;
    }
  }

  for (key in obj1){
    if (obj1[key] != obj2[key]){
      return false;
    }
  }

  return true;
}