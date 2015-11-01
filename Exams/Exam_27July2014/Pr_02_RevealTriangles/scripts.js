function revealTriangles(arr) {
    var input = [],
        matrix = [];

    for (var row = 0; row < arr.length; row += 1){
        input[row] = arr[row].split('');
        matrix[row] = arr[row].split('');
    }

    for (var row = 0; row < input.length - 1; row += 1){
        var maxCol = Math.min(input[row].length - 1, input[row + 1].length - 2);
        for (var col = 0; col < maxCol; col += 1){
            var a = input[row][col+1],
                b = input[row+1][col],
                c = input[row+1][col+1],
                d = input[row+1][col+2];
            if (a === b && b === c && c === d){
                matrix[row][col+1] = '*';
                matrix[row+1][col] = '*';
                matrix[row+1][col+1] = '*';
                matrix[row+1][col+2] = '*';
            }
        }
    }

    for (var row = 0; row < arr.length; row += 1){
        console.log(matrix[row].join(''));
    }
}


revealTriangles(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']);
//revealTriangles(['aa', 'aaa', 'aaaa', 'aaaaa']);