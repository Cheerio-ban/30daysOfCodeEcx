// function printPascal(n)
//     {
         
//     // Iterate through every line
//     // and print entries in it
//     for (let line = 0; line < n; line++)
//     {
//         // Every line has number of
//         // integers equal to line number
//         for (let i = 0; i <= line; i++)
//         document.write(binomialCoeff
//                         (line, i)+" ");
                         
//         document.write("<br />");
//     }
//     }
     
//     // Link for details of this function
//     // https://www.geeksforgeeks.org/space-and-time-efficient-binomial-coefficient/
//     function binomialCoeff(n, k)
//     {
//         let res = 1;
         
//         if (k > n - k)
//         k = n - k;
             
//         for (let i = 0; i < k; ++i)
//         {
//             res *= (n - i);
//             res /= (i + 1);
//         }
//         return res;
//     }
 
 
// // Driver Code
 
//     let n = 7;
//     printPascal(n);


function GeneratedTriangle1(rows) {
    var pascalsTriangle = [];

    for (let r = 0; r < rows; r++) {
        let elements = r + 1;
        let level = [];

        for (var i = 0; i < elements; i++) {
            if (i === 0 || i === elements - 1 || r === 1)
                level[i] = 1;
            else {
                let prevRow = pascalsTriangle[r - 1];
                level[i] = prevRow[i - 1] + prevRow[i];
            }
        }

        pascalsTriangle[r] = level;
    }

    return pascalsTriangle;
}

console.log(GeneratedTriangle1(4))