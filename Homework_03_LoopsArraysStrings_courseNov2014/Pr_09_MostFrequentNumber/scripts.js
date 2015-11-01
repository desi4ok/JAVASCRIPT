function mostFrequentNum(arr) {
    var count = 1,
        maxCount = 0,
        mostFreq,
        len = arr.length;

    if (len === 1){
        maxCount = 1;
        mostFreq = arr[0];
    } else {
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                if (arr[i] === arr[j] && arr[i] !== 'x' && arr[j] !== 'x') {
                    count += 1;
                    arr[j] = 'x';
                }

                if ((j === len - 1) && (count > maxCount)) {
                    maxCount = count;
                    count = 1;
                    mostFreq = arr[i];
                }
            }
        }
    }
    console.log(mostFreq + ' (' + maxCount + ' times)');
}

mostFrequentNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
mostFrequentNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
mostFrequentNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
mostFrequentNum([1]);