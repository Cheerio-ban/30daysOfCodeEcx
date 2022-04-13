const sample = [1, 9, 4, 5, 3, 0]
const n = 10

const sample2 = [2, 5, 9, 6, 1, 53, 45]
const n2 = 47


const myFunc = (arr, n) => {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === n){
                return [i, j]
            }
        }
    }return [-1, -1]
}

console.log(myFunc(sample, n))
console.log(myFunc(sample2, n2))
