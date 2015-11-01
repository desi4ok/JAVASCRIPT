function theMiner(arr){
    var line, array, temp, mine, ore, quantity, len;
    var silver = 0,
        gold = 0,
        diamonds = 0,
        output;

    for (var i in arr){
        line = arr[i].replace(/\s+/g, '');
        array = line.split(/[-]+/);
        mine = array[0];
        mine = mine.substring(0, 4);

        if (array.length === 2 && mine == 'mine'){
            temp = array[1].split(':');
            if (temp.length === 2){
                ore = temp[0];
                quantity = Number(temp[1]);

                if (ore == 'gold'){
                    gold += quantity;
                }else if (ore == 'silver'){
                    silver += quantity;
                }else if (ore == 'diamonds'){
                    diamonds += quantity;
                }
            }
        }
    }
    output = '*Silver: ' + silver + '\n' + '*Gold: ' + gold + '\n' + '*Diamonds: ' + diamonds;
    console.log(output);
}

//var input = ['mine bobovDol - gold: 10', 'mine medenRudnik - silver: 22', 'minechernoMore - shrimps : 24', 'gold: 50'];
var input = ['mine bobovdol - gold: 10', 'mine - diamonds: 5', 'mine colas - wood: 10',
'mine myMine - silver: 14', 'mine silver:14 - silver: 14'];
theMiner(input);
