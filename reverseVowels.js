function reverseVowels(string){
  // add whatever parameters you deem necessary - good luck!
  let arr = string.split("");
  let leftEnd = 0, rightEnd = arr.length;
  let vowels = ['a','e','i','o','u','A','E','I','O','U']

  while (leftEnd < rightEnd){
    if (vowels.indexOf(arr[leftEnd]) == -1){
      leftEnd ++;
      continue
    }
    if (vowels.indexOf(arr[rightEnd]) == -1){
      rightEnd --;
      continue
    }

    let temp = arr[leftEnd];
    arr[leftEnd] = arr[rightEnd];
    arr[rightEnd] = temp;

    leftEnd ++;
    rightEnd --;
  }
  
  return arr.join("");
}