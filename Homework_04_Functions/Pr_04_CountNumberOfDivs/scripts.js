function countNumOfDIVS(input) {
    var pattern = /<div/,
        result = input.match(pattern), //returns the matches, as an Array object
        count = result.length;  //how many elements there is in the array
    console.log(count);
    console.log(result);


//another solution:
//    var count2 = 0;
//
//    while (input.search('</div>') !== -1) {    //search() gives as a result the position of the match
//        count2++;
//        input = input.slice(input.search('</div>') + 1);     //string.slice(i); -> delete first 'i' letters of the string
//    }
//
//    console.log(count2);
}

var input = '<!DOCTYPE html>'+
    '    <html>'+
    '    <head lang="en">'+
    '<meta charset="UTF-8">'+
    '<title>index</title>'+
    '<script src="/yourScript.js" defer></script>'+
    '</head>'+
    '<body>'+
    '<div id="outerDiv">'+
    '<div'+
    'class="first">'+
    '<div><div>hello</div></div>'+
    '</div>'+
    '<div>hi<div></div></div>'+
    '<div>I am a div</div>'+
    '</div>'+
    '</body>'+
    '</html>';

countNumOfDIVS(input);