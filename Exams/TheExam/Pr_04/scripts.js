function last(input) {
    var info = { };
    for (var i in input) {
        var tokens = input[i].replace(/\s+/g, '').split(/[-:]/g);
        var name = tokens[0];
        var lang = tokens[1];
        var points = tokens[2];

        if (!info[lang]) {
            info[lang] = [{name: '', result: 0, makeUpExams: 0}];
        }
        info[lang].name += name;
    }

    // Sort the concertInfo structure
    //concertInfo = sortObjectProperties(concertInfo);                  //sorting towns
    //for (var town in concertInfo) {
    //    concertInfo[town] = sortObjectProperties(concertInfo[town]);  //sorting venues
    //    for (var venue in concertInfo[town]) {
    //        concertInfo[town][venue].sort();                          //sorting bands
    //    }
    //}

    // Print the concertInfo as JSON string
    console.log(JSON.stringify(info));

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


var input = ['Simon Cowell - PHP : 100', 'Simon Cowell-PHP: 500', 'Peter Jackson - PHP: 350', 'Simon Cowell - PHP : 400'];

concerts(input);
