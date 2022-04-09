
const arr1 = [1, 5, 4]
const arr2 = [1, 2, -3, 5]

const addArray = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        counter += arr[i];
    }
    return counter
}

console.log(addArray(arr1));
console.log(addArray(arr2));

