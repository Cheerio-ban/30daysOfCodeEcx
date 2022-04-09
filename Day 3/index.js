
const arr1 = [4, 10, 6, 9, 15, 18]





const FizzBuzz2 = (arr) => {
    counter = [];
    counter1 = [];
    arr.forEach(element => {
        for(let j = 1; j <= element; j++){
            if (j % 3 === 0 && j % 5 === 0) {
                counter.push('FizzBuzz');
            }else if (j % 3 === 0){
                counter.push('Fizz');
            }else if (j % 5 === 0){
                counter.push('Buzz');
            }else {
                counter.push(j);
            }
        
        }
        counter1.push(counter);
        counter = []
    });
    return counter1;
}


console.log(FizzBuzz2(arr1));