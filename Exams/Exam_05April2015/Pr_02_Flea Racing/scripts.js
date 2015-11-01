function fleaRacing(arr){
    var track = parseInt(arr[1]),
        audience = '',
        maxJumps = parseInt(arr[0]),
        winner = '',
        flews = [],
        flewDist = [],
        flewDistFinal = [],
        maxFurther = 0,
        further = 0,
        zeroCount = 0;

    //info = [];

    for (var temp = 0; temp < track; temp += 1){
        audience += '#';
    }

    var output = audience + '\n' + audience + '\n';
    for (var i = 2; i < arr.length; i += 1){
        var row = arr[i].split(',');
        flews[i-2] = row[0].trim();
        flewDist[i-2] = parseInt(row[1].trim());
        flewDistFinal[i-2] = flewDist[i-2] + 1;

        if (winner === '' && flewDistFinal[i-2] >= track){
            winner = flews[i-2];
            flewDistFinal[i-2] = track;
        } else if (winner.length > 0 && flewDistFinal[i-2] >= track){
            flewDistFinal[i-2] = 1;
        } else if (flewDistFinal[i-2] === 1){
            zeroCount += 1;
            if (i - 1 === zeroCount) {
                winner = flews[i - 2];
            }
        }
    }

    if(winner === '') {
        for (var jump = 1; jump < maxJumps; jump += 1) {
            for (var num = 0; num < flews.length; num += 1){
                flewDistFinal[num] += flewDist[num];
                if (flewDistFinal[num] >= track){
                    flewDistFinal[num] = track;
                    winner = flews[num];
                    jump = maxJumps;
                    break;
                }
            }
        }
    }

    if(winner === '') {
        for (var num = 0; num < flews.length - 1; num += 1){

            if (flewDistFinal[num + 1] >= flewDistFinal[num]) {
                further = flewDistFinal[num + 1];
            }

            if (further > maxFurther){
                maxFurther = further;
            }
        }

        for (var num = 0; num < flews.length; num += 1){
            if (flewDistFinal[num] === maxFurther){
                winner = flews[num];
            }
        }
    }

    for (var row = 0; row < flews.length; row += 1){
        for (var dots = 0; dots < track; dots += 1){
            if (dots === flewDistFinal[row] - 1){
                output += flews[row].toUpperCase().charAt(0);
            }else{
                output += '.';
            }

        }
        output += '\n';
    }

    output += audience + '\n' + audience + '\n' + 'Winner: ' + winner;
    console.log(output);

}

   var input = ['1', '5', 'kiril, 5', 'desi, 5'];
   //var input = ['10', '19', 'angel, 9', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7'];
    // var input = ['3', '5', 'cura, 1', 'Pepi, 1', 'UlTraFlea, 1', 'BOIKO, 1'];
fleaRacing(input);