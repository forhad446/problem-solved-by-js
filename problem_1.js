function arrayReplace(inputArray, elementToReplace, substrationElem){
    for(let i = 0; i < inputArray.length ; i++){
        if(inputArray[i] == elementToReplace){
            inputArray[i] = substrationElem;
        }
    }
    return inputArray;
}
const result = arrayReplace([1, 2, 1],1,3);
console.log(result)