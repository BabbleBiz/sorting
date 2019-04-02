function split(wholeArray) {
  let splitNum = Math.ceil(wholeArray.length / 2)
  let firstHalf = wholeArray.splice(0, splitNum)
  let secondHalf = wholeArray

  return [firstHalf, secondHalf];
}

function merge(arrayOfArrays) {
  let mergedArray = []
  let firstArray = arrayOfArrays[0]
  let secondArray = arrayOfArrays[1]
  let totalItems = firstArray.length + secondArray.length

  for (let i = 0; i < totalItems; i++){
    if (!firstArray[0] || firstArray[0] > secondArray[0]){
      mergedArray.push(secondArray.shift())
    } else {
      mergedArray.push(firstArray.shift())
    }
  }
  return mergedArray
}
