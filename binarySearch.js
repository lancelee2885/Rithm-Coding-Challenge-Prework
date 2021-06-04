function binarySearch(arr,target){
  // add whatever parameters you deem necessary - good luck!

  let min=0, max = arr.length-1;
  let guess = 0;
  
  while (arr[guess] != target){
  if (max < min){
    return -1;
  }
  guess = (max+min)/2;
  guess = Math.floor(guess);
  if (arr[guess] == target){
    return guess;
  } else if (arr[guess]<target){
    min = guess + 1;
  } else if (arr[guess]>target){
    max = guess - 1;
  }
  }

}