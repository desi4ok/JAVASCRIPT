function xShapes(arr) {
    var input = [],
        matrix = [];

    for (var row = 0; row < arr.length; row += 1){
        input[row] = arr[row].toUpperCase().split('');
        matrix[row] = arr[row].split('');
    }

    for (var row = 0; row < input.length - 2; row += 1){
        var maxCol = Math.min((Math.min(input[row].length - 2, input[row + 1].length - 1)), input[row + 2].length - 2);
        for (var col = 0; col < maxCol; col += 1){
            var a = input[row][col],
                b = input[row][col+2],
                c = input[row+1][col+1],
                d = input[row+2][col],
                e = input[row+2][col+2];
            if (a === b && b === c && c === d && d === e){
                matrix[row][col] = '';
                matrix[row][col+2] = '';
                matrix[row+1][col+1] = '';
                matrix[row+2][col] = '';
                matrix[row+2][col+2] = '';
            }
        }
    }

    for (var row = 0; row < arr.length; row += 1){
        console.log(matrix[row].join(''));
    }
}

var input = ['puoUdai', 'miU', 'ausupirina', '8n8i8', 'm8o8a', '8l8o860', 'M8i8', '8e8!8?!'];

xShapes(input);
