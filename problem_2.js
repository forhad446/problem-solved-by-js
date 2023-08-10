// 1. Write a function that returns the sum of two numbers.
// 2. Write a function that returns the sum of all numbers regardless of # of params.
// Example
//     For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
function add(param1, param2){
    const sum = param1 + param2;
    // return sum;
}
// console.log(add(1,2));

function totalsum(...param1){
    let sum = 0;
    for(let item of param1){
        sum += item;
    }
    return sum;
}
console.log(totalsum(1, 2, 3, 4))