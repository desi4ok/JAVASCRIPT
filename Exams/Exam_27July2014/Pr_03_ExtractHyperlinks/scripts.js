function solve (input) {
    str = '';
    for (var index in input) {
        str += input[index];
    }

    str = str.replace(/\s/g,'');

    var anchors = str.match(/<a[^>]+>/g);

    var hrefs = [];

    for(var index in anchors) {
        if(anchors[index].match(/href\s*=\s*"[^"]+"/g)) {
            hrefs.push(anchors[index].match(/href\s*=\s*"[^"]+"/g).toString());
        }
        if(anchors[index].match(/href\s*=\s*'[^']+'/g)) {
            hrefs.push(anchors[index].match(/href\s*=\s*'[^']+'/g).toString());
        }
    }


    for(var index in hrefs) {
        if(hrefs[index].match(/="[^"]+"/g)) {
            console.log(hrefs[index].match(/="[^"]+"/g).toString().replace(/(=")|"/g, ''));
        }
        if(hrefs[index].match(/='[^']+'/g)) {
            console.log(hrefs[index].match(/='[^']+'/g).toString().replace(/(=')|'/g, ''));
        }
    }
}


//авторско решение
//function extractLinks(input) {
//    var html = input.join('\n');
//    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
//    var match;
//    while (match = regex.exec(html)) {
//        var hrefValue = match[3];
//        if (hrefValue == undefined) {
//            var hrefValue = match[4];
//        }
//        if (hrefValue == undefined) {
//            var hrefValue = match[5];
//        }
//        console.log(hrefValue);
//    }
//}