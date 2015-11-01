function rolandGarros(arr){
    var results = { };
    for (var i in arr) {
        var row = arr[i].replace(/\s+/g, ' ').split(/[:]+/),
            players = row[0].split('vs.'),
            player1 = players[0].trim(),
            player2 = players[1].trim(),
            scoreTable = row[1].trim().split(' ');
            matchesWon = 0,
            matchesLost = 0,
            setsWon = 0,
            setsLost = 0,
            gamesWon = 0,
            gamesLost = 0;

        for(var j in scoreTable){
            var score = scoreTable[j].split('-'),
                first = parseInt(score[0]),
                second = parseInt(score[1]);

            if(first > second){
                setsWon += 1;
                gamesWon += first;
            }else{
                setsLost += 1;
                gamesLost += second;
            }
        }

        if (setsWon > setsLost){
            matchesWon += 1;
        }else{
            matchesLost += 1;
        }
        processResults(results, player1, player2, matchesWon, matchesLost, setsWon, setsLost, gamesWon, gamesLost);
        processResults(results, player2, player1, matchesLost, matchesWon, setsLost, setsWon, gamesLost, gamesWon);
    }


    function processResults(results, player1, player2, matchesWon, matchesLost, setsWon, setsLost, gamesWon, gamesLost) {
        if (!results[player1]) {
            results[player1] = { name: '', matchesWon: 0, matchesLost: 0, setsWon: 0, setsLost: 0, gamesWon: 0, gamesLost: 0};
        }
        if (results[player1].name === '') {
            results[player1].name += player1;
        }
        results[player1].matchesWon += matchesWon;
        results[player1].matchesLost += matchesLost;
        results[player1].setsWon += setsWon;
        results[player1].setsLost += setsLost;
        results[player1].gamesWon += gamesWon;
        results[player1].gamesLost += gamesLost;
    }
    console.log(JSON.stringify(results));
}



var input = ['Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David     Ferrer : 6-4 7-6',
    'Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        Agassi:2-1'];
rolandGarros(input);