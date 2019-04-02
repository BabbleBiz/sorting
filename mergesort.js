/* eslint-disable complexity */
function split(wholeArray) {
  let splitNum = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, splitNum);
  let secondHalf = wholeArray.slice(splitNum);

  return [firstHalf, secondHalf];
}

function merge(arrayOfArrays) {
  let mergedArray = [];
  let firstArray = arrayOfArrays[0];
  let secondArray = arrayOfArrays[1];
  let totalItems = 1
  if (firstArray && firstArray.length && secondArray && secondArray.length){
    totalItems = firstArray.length + secondArray.length;
    for (let i = 0; i < totalItems; i++) {
      if (firstArray[0] > secondArray[0]) {
        mergedArray.push(secondArray.shift());
      } else {
        mergedArray.push(firstArray.shift());
      }
    }
  } else { mergedArray = [...mergedArray, ...firstArray] }

  return mergedArray;
}

function mergeSort(array) {
  let initLength = array.length;
  let splitArr = array;
  let mergedArr = [];


  let workArr = splitArr;
  splitArr = [];
  let [first, second] = split(workArr);
  splitArr.push(first);
  splitArr.push(second);

  while (splitArr.length < initLength - 1){
    workArr = splitArr;
    splitArr = [];

    for (let i = 0; i < workArr.length; i++){
      let [first, second] = split(workArr[i]);


      splitArr.push(first);

      console.log(first, second);
      if (second) { splitArr.push(second); }

    }
    //console.log('splitArr', splitArr);

  }
  mergedArr = splitArr


  while (mergedArr.length > 1) {

    workArr = mergedArr
    mergedArr = []
    for (let i = 0; i < workArr.length; i = i + 2){

      let currentMerge = [workArr[i], workArr[i + 1]]
      mergedArr.push(merge(currentMerge))
    }
  }
  return mergedArr
}
