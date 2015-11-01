function doubleNumbers(arr){
    var start = parseInt(arr[0]),
        end = parseInt(arr[1]),
        len = end - start + 1,
        num = start,
        count = 0,
        output = '<ul>\n';

    for (var i = 0; i < len; i += 1) {
        var strNum = num.toString(),
            strLen = strNum.length - 2;
        for ( var j = 0; j < strLen-1; j += 1){
            for (var k = j+2; k < strLen+1; k += 1){
                var a = strNum[j] + strNum[j+1],
                    b = strNum[k] + strNum[k+1];
                if (a === b) {
                    count += 1;
                    output += "<li><span class='rakiya'>" + strNum + '</span><a href="view.php?id=' + strNum + '>View</a></li>' + '\n';
                    k = strLen + 1;
                    j = strLen - 1;
                }
            }
        }
        if (count == 0){
            output += "<li><span class='num'>" + strNum + '</span></li>' + '\n';
        }
        count = 0;
        num += 1;
    }
    output += '</ul>';
    console.log(output);
}

var arr = [55555, 55555];


doubleNumbers(arr);