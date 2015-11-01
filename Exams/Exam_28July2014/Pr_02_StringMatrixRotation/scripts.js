function matrixRotation(arr) {
    var matrix = [],
        newMatrix = [],
        maxLength = elementsMaxLength(arr),
        len = arr.length;
        stringAngle = arr[0].replace('Rotate(', '').replace(')', ''),
        angle = parseInt(stringAngle),
        output = '';

    for (var row = 1; row < arr.length; row += 1){
        matrix[row - 1] = arr[row].split('');
        matrix[row - 1].length = maxLength;
    }

    for(var row = 0; row < maxLength; row += 1){
        for(var col = 0; col < arr.length - 1; col += 1){

            if(angle%360 == 90){
                newMatrix[col][arr.length - 2 - row] = matrix[row][col];
            }else if (angle%360 == 180){
                matrix[row][col] = newMatrix[arr.length-2-row][maxLength-1-col];
            }else if (angle%360 == 270){
                matrix[row][col] = newMatrix[maxLength-1-col][row];
            }
        }
    }

    console.log(matrix.join(''));
}

function elementsMaxLength(arr){
    var maxLength = 0,
        length = 0;

    for (var i = 1; i < arr.length; i += 1){
        length = arr[i].length;
        if (length > maxLength){
            maxLength = length;
        }
    }
    return maxLength;
}

var input = ['Rotate(90)', 'hello', 'softuni', 'exam'];

matrixRotation(input);