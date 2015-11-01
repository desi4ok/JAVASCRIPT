function magicGrid(arr){
    var matrix = [],
        rowLen = arr.length - 2,
        colLen,
        encryptedString = arr[0],
        magicNum = Number(arr[1]),
        rowFirstNum = 0,
        colFirstNum = 0,
        rowSecondNum = 0,
        colSecondNum = 0,
        sumRowCol,
        output = '';

    for (var i = 2; i < arr.length; i += 1){
        matrix[i-2] = arr[i].split(' ');
    }

    colLen = matrix[0].length;

    for(var rowY = 0; rowY < rowLen; rowY += 1){
        for(var colY = 0; colY < colLen; colY += 1){
            var firstNum = matrix[rowY][colY];
            for (var rowX = 0; rowX < rowLen; rowX += 1) {
                for (var colX = 0; colX < colLen; colX += 1) {
                    var secondNum = matrix[rowX][colX];
                    if (rowX !== rowY || colX !== colY) {
                        if (Number(firstNum) + Number(secondNum) === magicNum) {
                            rowFirstNum = rowY;
                            colFirstNum = colY;
                            rowSecondNum = rowX;
                            colSecondNum = colX;
                            rowY = rowLen;
                            colY = colLen;
                            rowX = rowLen;
                            colX = colLen;
                        }
                    }
                }
            }
        }
    }
    sumRowCol = rowFirstNum + colFirstNum + rowSecondNum + colSecondNum;

    for (var pos = 0; pos < encryptedString.length; pos += 1){
        var currentChar = encryptedString.charCodeAt(pos);
        if (pos % 2 === 0){
            var newChar = currentChar + sumRowCol;
        }else{
            newChar = currentChar - sumRowCol;
        }
        output += String.fromCharCode(newChar);
    }
    console.log(output);
}

var input = ['QqdvSpg', '10', '100 200 0 5', '120 300  0 310', '5 290 0 370'];
magicGrid(input);