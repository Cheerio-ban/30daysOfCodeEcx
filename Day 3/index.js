arr1 = [4, 10, 6, 9, 15, 18]


const FizzBuzz = (arr) => {
    counter = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
            counter.push("FizzBuzz");
        }else if (arr[i] % 3 === 0){
            counter.push("Fizz");
        }else if (arr[i] % 5 === 0) {
            counter.push("Buzz");
        }else {
            counter.push(arr[i]);
        }
    }
    console.log(counter)
}

FizzBuzz(arr1);