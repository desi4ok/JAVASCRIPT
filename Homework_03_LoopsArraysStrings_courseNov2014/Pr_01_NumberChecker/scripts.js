function printNumbers(num) {
    if (num > 0) {
        var output = '';
        for (var i = 1; i <= num; i++) {
            if (i % 4 !== 0 && i % 5 !== 0)
                output += i + ', ';
        }
        console.log(output.slice(0, -2));
    } else {
        console.log('no');
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);