array1 = [0, 2, 4, 6]
array2 = [4, 4, 5, 7,9]
array3 = [2,3,4,5]
array4 = [2,8,9,10, 11]

function merged(arr1, arr2) {
    const decoyArray = []
    let arr1Item = arr1[0] 
    let arr2Item = arr2[0]
    i = 1;
    j = 1;
    if (!arr1) {
        return arr2;
    } if (!arr2) {
        return arr1;
    }
   

    while (arr1Item || arr2Item) {
        if (!arr2 || arr1Item < arr2Item){
            decoyArray.push(arr1Item)
            arr1Item = arr1[i];
            i++;
        } else {
            decoyArray.push(arr2Item)
            arr2Item = arr2[j];
            j++;
        }
        
    }

    return decoyArray;
}

console.log(merged(array1, array2));
console.log(merged(array3, array4))