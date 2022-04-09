const sample = [{name: 'Thor', age: '22', level: '300 level'}, {name: 'Musa', age: '23', level: '200 level'}, {name: 'Bola', age: '24', level: '400 level'}, {name: 'Tunde', age: '22', level: '500 level'}]


const arrToString = (arr) => {
    let strip = ''
    let counter = []
    for (let i = 0; i < arr.length; i++) {
        counter.push(strip += arr[i].name + '/' + arr[i].age + '/' + arr[i].level);
        strip = ''
    }
    return counter
}


console.log(arrToString(sample))