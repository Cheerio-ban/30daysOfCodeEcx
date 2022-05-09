function GeneratedTriangle1(rows) {
    var pascalsTriangle = [];

    for (let j = 0; j < rows; j++) {
        let elements = j + 1;
        let level = [];

        for (var i = 0; i < elements; i++) {
            if (i === 0 || i === elements - 1 || j === 1)
                level[i] = 1;
            else {
                let prevRow = pascalsTriangle[r - 1];
                level[i] = prevRow[i - 1] + prevRow[i];
            }
        }

        pascalsTriangle[j] = level;
    }

    return pascalsTriangle;
}

console.log(GeneratedTriangle1(4))