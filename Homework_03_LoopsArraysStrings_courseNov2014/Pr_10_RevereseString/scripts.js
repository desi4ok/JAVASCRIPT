function stringReverser(str) {
    var len = str.length,
        arr = str.split(''),
        output = '';

        arr = arr.reverse();

    for (var i = 0; i < len; i++){
        output += arr[i];
    }
    console.log(output);
}

stringReverser('sample');
stringReverser('softUni');
stringReverser('java script');