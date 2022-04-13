const example = [6, 5, 3, 4, 2, 9, 7] 

// Function that sorts array.
const sortedArray = (arr) => {
    // A variable that regulates whether the sorting is done.
    completed = false;
    while(!completed){
        //This converts the completed status incase it is eventually sorted.
        completed = true;
        //loop through the whole array.
        for(let i = 0; i < arr.length; i++) {
            //check if an element with a lesser index is greater than one with a greater index and swap them if they are.
            if(arr[i-1] > arr[i]){
                completed = false;
                let temp = arr[i-1];
                arr[i-1] = arr[i]
                arr[i] = temp;
            }
        }
    }
    return arr
}


console.log(sortedArray(example));