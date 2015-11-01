function uncleScrudgeBag(arr){
    var coins = 0,
        len = arr.length,
        gold = 0,
        silver = 0,
        bronze = 0;

    for (var i = 0; i < len; i += 1){
        var row = arr[i].split(/\s+/),
            type = row[0].toUpperCase();

        if (!isNaN(row[1])){
            var coin = parseFloat(row[1]);
        }


        if (type === 'COIN' && coin % 1 === 0 && coin >= 0){
            coins += coin;
            coin = 0;
        }
    }

    gold = Math.floor(coins / 100);
    silver = Math.floor((coins % 100) / 10);
    bronze = coins % 10;

    console.log('gold : ' + gold + '\n' + 'silver : ' + silver + '\n' + 'bronze : ' + bronze);
}

var input = ['coin 100.5', 'coin -10', 'coin 0', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1'];
uncleScrudgeBag(input);