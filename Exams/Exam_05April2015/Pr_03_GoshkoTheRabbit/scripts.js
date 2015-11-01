function goshkoTheRabbit(arr) {
    var output = '',
        countOfLettuce = 0,
        countOfCabbage = 0,
        countOfTurnip = 0,
        countOfCarrots = 0,
        countOfWallHits = 0,
        passedCells = '',
        directins = arr[0].split(', '),
        matrix = [],
        colCount = 0,
        rowCount = 0,
        ifHasHit = 0,
        count = 0;

    for (var row = 0; row < arr.length - 1; row += 1) {
        var temp = arr[row + 1].split(', ');
        matrix[row] = temp;
    }

    for (var i = 0; i < directins.length; i += 1) {

        var direction = directins[i];

        if(direction === 'right'){
            colCount += 1;
            if (matrix[rowCount].length < colCount) {
                countOfWallHits += 1;
                ifHasHit += 1;
                colCount = colCount - 1;
            }
        }else if (direction === 'left'){
            colCount = colCount - 1;
            if (colCount < 0) {
                countOfWallHits += 1;
                ifHasHit += 1;
                colCount = colCount + 1;
            }
        }else if (direction === 'up'){
            rowCount = rowCount - 1;
            if (rowCount < 0) {
                countOfWallHits += 1;
                ifHasHit += 1;
                rowCount = rowCount + 1;
            }
        }else if (direction === 'down'){
            rowCount += 1;
            if (matrix.length < rowCount) {
                countOfWallHits += 1;
                ifHasHit += 1;
                rowCount = rowCount - 1;
            }
        }


        //if (ifHasHit === 0) {
        //    count += 1;
        //    for (var j = 0; j < 20; j += 1) {
        //         var cellToEat = matrix[rowCount][colCount];
        //        if (cellToEat.search('{&}') !== -1) {    //search() gives as a result the position of the match
        //            countOfLettuce += 1;
        //            matrix[rowCount][colCount] = matrix[rowCount][colCount].replace('{&}', '@');
        //        } else if (cellToEat.search('{!}') !== -1) {
        //            countOfCarrots += 1;
        //            matrix[rowCount][colCount] = matrix[rowCount][colCount].replace('{!}', '@');
        //        } else if (cellToEat.search('{#}') !== -1) {
        //            countOfTurnip += 1;
        //            matrix[rowCount][colCount] = matrix[rowCount][colCount].replace('{#}', '@');
        //        } else if (cellToEat.search('{\\*}') !== -1) {
        //            countOfCabbage += 1;
        //            matrix[rowCount][colCount] = matrix[rowCount][colCount].replace('{*}', '@');
        //        }
        //    }
        //    passedCells += matrix[rowCount][colCount] + '|';
        //}
        //ifHasHit = 0;
    }

    passedCells = passedCells.slice(0, passedCells.length - 1);
    output += '{"&":' + countOfLettuce + ',"*":' + countOfCabbage + ',"#":' + countOfTurnip + ',"!":' + countOfCarrots + ',"wall hits":' + countOfWallHits + '}' + '\n' + passedCells;
    if (count === 0){
        console.log('no');
    }else {
        console.log(output);
    }


}




//var input = ['right, up, up, down', 'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
  //  'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip', 'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'];

var input = ['up, right, left, down', 'as{!}xnk', 'as{!}xnk'];

goshkoTheRabbit(input);