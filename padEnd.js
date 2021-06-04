function padEnd(string, num, padEnd){
  // add whatever parameters you deem necessary - good luck!
  /*

padEnd("abc", 6); //  'abc   '
padEnd("hi", 10); // 'hi        '
padEnd("hello", 5); // 'hello'
padEnd("hello", 1); // 'hello'
padEnd("abc", 6, "xyz"); // 'abcxyz'
padEnd("hello", 11, " world"); // 'hello world'
padEnd("hello", 5, " world"); // 'hello');
padEnd("abc", 5, "xyz"); // 'abcxy'
padEnd("abc", 10, "xyz"); // 'abcxyzxyzx' abcxyz_
padEnd("hello", 7, " world"); // 'hello w'
padEnd("hello", 25, " world"); // 'hello world world world w'

  */

//
  let stringArr = string.split("");

  let combiningthing = "";

  if (num > string.length){
    if (typeof padEnd != "string"){
      for (i=0; i<num-string.length; i++){
        combiningthing += " ";
      } return string + combiningthing;
    } 
    // if padEnd is a string
  
    for (i=0; i<num-string.length; i++){
      if (i>=padEnd.length){
        combiningthing += padEnd[i%padEnd.length];
      } else { combiningthing += padEnd[i] };
    } 
  }


  return string + combiningthing;
}

