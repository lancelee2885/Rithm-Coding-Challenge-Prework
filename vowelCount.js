function vowelCount(str){
  // add whatever parameters you deem necessary - good luck!
  let result ={};
  str = str.toLowerCase();
  let vowels = ['a','e','i','o','u'];

  for (i=0; i <str.length; i++){
    if (vowels.includes(str[i])){
      if (str[i] in result != true){
        result[str[i]] = 1;
      } else {
        result[str[i]] += 1;
      }
    }
  } return result

}