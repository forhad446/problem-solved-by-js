// Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.
// Example
    // For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should
    // be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3]
    
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