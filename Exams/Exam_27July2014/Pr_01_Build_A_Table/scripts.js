function outputTable(input) {
    var fibNum = 'yes',
        num = parseInt(input[0]),
        len = parseInt(input[1]) - num + 1,
        a = 1,
        b = 2,
        c = 0,
        output = '<table>\n' + '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';

        for (var i = 0; i < len; i += 1){
            if (num === 1 || num === 2){
                output += '<tr><td>' + num + '</td><td>' + num * num + '</td><td>yes</td></tr>\n';
            }else if (num > 2){
                while(c < num){
                    c = a + b;
                    a = b;
                    b = c;
                }

                if ( c === num){
                    output += '<tr><td>' + num + '</td><td>' + num * num + '</td><td>yes</td></tr>\n';
                }else {
                    output += '<tr><td>' + num + '</td><td>' + num * num + '</td><td>no</td></tr>\n';
                }
            }
            num += 1;
        }
output += '</table>';
console.log(output);
}

outputTable([2, 6]);
outputTable([55, 56]);