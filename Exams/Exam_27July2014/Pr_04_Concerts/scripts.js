function concerts(input) {
    var concertInfo = { };
    for (var i in input) {
        var tokens = input[i].split('|');
        var band = tokens[0].trim();
        var town = tokens[1].trim();
        var date = tokens[2].trim();
        var venue = tokens[3].trim();

        if (!concertInfo[town]) {
            concertInfo[town] = { };
        }
        if (!concertInfo[town][venue]) {
            concertInfo[town][venue] = [];
        }
        if (concertInfo[town][venue].indexOf(band) == -1) {           //The indexOf() method searches the array for the specified item, and returns its position.
            concertInfo[town][venue].push(band);                      //Returns -1 if the item is not found.
        }
    }

    // Sort the concertInfo structure
    concertInfo = sortObjectProperties(concertInfo);                  //sorting towns
    for (var town in concertInfo) {
        concertInfo[town] = sortObjectProperties(concertInfo[town]);  //sorting venues
        for (var venue in concertInfo[town]) {
            concertInfo[town][venue].sort();                          //sorting bands
        }
    }

    // Print the concertInfo as JSON string
    console.log(JSON.stringify(concertInfo));

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}


var arr = ['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
];

concerts(arr);