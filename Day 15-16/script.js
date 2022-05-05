// const a = [1, '2','3','4', '5', '6']
// const b = {a: 'geg', 
//     b: 'gege',
//     c: 'card',
//     d: 'carlson',
// }

// console.log(a.join('/'))
// console.log(b.toString());
// console.log(a.toString());

// let str = 'i am a fine boy'
// let str2 = 'you are a goat'

// function reversed(str) {
//     let lengthy = str.length - 1;
//     let decoyArray = []
//     if (!str || typeof str !== 'string' || str.length < 2) {
//         return "string can't be reversed"
//     }
//     while (lengthy >= 0) {
//         decoyArray.push(str[lengthy]);
//         lengthy--
//     }
    
//     return decoyArray.join('')
// }

// console.log(1)
// console.log(reversed(str));
// console.log(reversed(str2));

// console.log(1)




// function merge(arr1, arr2) {
//     const decoyArray = []
//     let array1Item = arr1[0];
//     let array2Item = arr2[0];
//     let i = 1;
//     let j = 1;
//     if (arr1.length === 0) {
//         return arr2
//     } else if (arr2.length === 0) {
//         return arr1;
//     } else  {
//         while ( array1Item || array2Item){
//             if (!array2Item || array1Item < array2Item) {
//                 decoyArray.push(array1Item)
//                 array1Item = arr1[i];
//                 i++;
//             } else{
//                 decoyArray.push(array2Item);
//                 array2Item = arr2[j];
//                 j++;
//             }
//         }
        
//     }
//     return decoyArray;  

// }


// console.log(merge(array1, array2))


// array1 = [0, 2, 4, 6]
// array2 = [4, 4, 5, 7,9]
// array3 = [2,3,4,5]
// array4 = [2,8,9,10, 11]

// function merged(arr1, arr2) {
//     if (!arr1) {
//         return arr2;
//     } if (!arr2) {
//         return arr1;
//     }
//     const decoyArray = []
//     let arr1Item = arr1[0] 
//     let arr2Item = arr2[0]
//     i = 1;
//     j = 1;

//     while (arr1Item || arr2Item) {
//         if (!arr2 || arr1Item < arr2Item){
//             decoyArray.push(arr1Item)
//             arr1Item = arr1[i];
//             i++;
//         } else {
//             decoyArray.push(arr2Item)
//             arr2Item = arr2[j];
//             j++;
//         }
        
//     }

//     return decoyArray;
// }

// console.log(merged(array1, array2));
// console.log(merged(array3, array4))


class Array {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(elem) {
        this.data[this.length] = elem;
        this.length++
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        let lengthy = this.length - 1
        const lastItem = this.data[lengthy];
        delete this.data[lengthy];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1 ; i++) {
            this.data[i] = this.data[i+1];
        } delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new Array();
newArray.push('hi')
newArray.push(',')
newArray.push('how')
newArray.push('are')
newArray.push('you')
newArray.delete(2);
// newArray.pop('I')
// newArray.pop('am')
// newArray.pop('hi')
console.log(newArray);