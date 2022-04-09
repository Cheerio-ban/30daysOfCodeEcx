const sample = ['seun/23/100 level', 'seern/23/500 level', 'BBBgh/twenty three/year 1']


const reversed = (arr) => {
    const decoyArray2 = []
    arr.forEach(element => {
        const decoyArray1 = element.split("/")
        
        decoyArray2.push({
            name: `${decoyArray1[0]}`,
            age: `${decoyArray1[1]}`,
            level: `${decoyArray1[2]}`
        })
         
    });
    return decoyArray2
}


console.log(reversed(sample))