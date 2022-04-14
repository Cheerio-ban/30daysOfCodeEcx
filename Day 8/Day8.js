const example = ["racecar", "abcd", "bab", "kala", "madam", "carac", "Hannah", "COlLoc", "Careful"]


const myFunc = (arr) => {
    // Iterating through the array using the map method and checking if it's a palindrome using a for-loop.
    const newArray = arr.map(element => {
        let len = element.length
        //Given the fact that it's a palindrome, we only have to iterate throught half of the element while checking both the first and the last element simultaneously.
        for (let i = 0; i < len/2; i++){
            // Converting to lower case incase it's a match between a capital letter and a small letter.
            if (element[i].toLowerCase() !== element[len - 1 - i].toLowerCase()){
                // If it isn't a palindrome, return true.
                return false;
            }
                
            else{
                //If it is a palindrome, return false.
                return true;
            }
        }
        
    
    })
    return newArray
}


console.log(myFunc(example));