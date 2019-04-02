// const object = {}
function swap (firstVal, secondVal) {
    if (firstVal > secondVal) {
        let temp = firstVal;
        firstVal = secondVal;
        secondVal = temp;
    }
    return [firstVal, secondVal]
}


function bubbleSort (arr) {
    let outputArr =  []
    for (let j = arr.length; j > 0; j--){

        for (let i = 0; i < arr.length - 1; i++){
            let firstVal = arr[i];
            let secondVal = arr[i+1];
            let correctOrder = swap(firstVal, secondVal);
            arr[i] = correctOrder[0];
            arr[i + 1] = correctOrder[1]
        }

        outputArr.unshift(arr.pop())
    }

    return outputArr
}




