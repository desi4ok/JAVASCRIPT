function notebook(arr){
    var info = { };
    for(var i in arr){
        var row = arr[i].split('|'),
            color = row[0];
        if (!info[color]) {
            info[color] = { age: 0, name: 0, opponents: [], wins: 0, losses: 0, rank: 0};
        }

        if (row[1] === 'age'){
            info[color].age = row[2];
        }else if (row[1] === 'name'){
            info[color].name = row[2];
        }else if (row[1] === 'win'){
            info[color].wins += 1;
            info[color].opponents.push(row[2]);
        }else if (row[1] === 'loss'){
            info[color].losses += 1;
            info[color].opponents.push(row[2]);
        }
    }

    info = sortObjectProperties(info);
    for (var color in info) {
        info[color].opponents.sort();
    }

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }


    for (var color in info){
        info[color].rank = ranking(info[color].wins, info[color].losses);
        delete info[color].wins;
        delete info[color].losses;
    }

    for (var color in info){
        if (info[color].age == 0 || info[color].name == 0){
            delete info[color];
        }
    }

    function ranking(wins, losses){
        return ((wins + 1) / (losses + 1)).toFixed(2);
    }
   // info = JSON.stringify(info);
    console.log(JSON.stringify(info));
}


//notebook(['purple|age|99', 'red|age|44', 'blue|win|pesho', 'blue|win|mariya', 'purple|loss|Kiko', 'purple|loss|Kiko',
//          'purple|loss|Kiko', 'purple|loss|Yana', 'purple|loss|Yana', 'purple|loss|Manov', 'purple|loss|Manov',
//          'red|name|gosho', 'blue|win|Vladko', 'purple|loss|Yana', 'purple|name|VladoKaramfilov', 'blue|age|21',
//          'blue|loss|Pesho']);

notebook(['red|name|kiko', 'red|win|Vladko', 'blue|age|12', 'green|age|13', 'green|win|gosho', 'red|age|12',
'green|name|Pesho', 'green|win|ico', 'green|win|Gosho', 'green|win|qfkata', 'green|win|stamat', 'green|win|petko',
'green|win|mariya']);