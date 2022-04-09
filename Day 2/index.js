
// FizzBuzz Function that takes an integer as an input.

const FizzBuzz = (n) => {
    for(let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }else if (i % 3 === 0){
            console.log('Fizz');
        }else if (i % 5 === 0){
            console.log('Buzz');
        }else {
            console.log(i);
        }
    }
}

// Examples of numbers
console.log(FizzBuzz(15));
console.log(FizzBuzz(90));