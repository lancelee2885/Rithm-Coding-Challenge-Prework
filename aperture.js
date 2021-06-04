function aperture(n, arr){
  // add whatever parameters you deem necessary - good luck!
  
  if (arr.length < n || n <= 0) {
    return []
  }

  let arrLength = arr.length
  let result = []
  for (let i = 0; i < arrLength; i++) {
    let slicedarr = arr.slice(i, n+i)
    if (slicedarr && slicedarr.length === n) {
      result.push(slicedarr)
      continue
    }
    break
  }
  return result

}