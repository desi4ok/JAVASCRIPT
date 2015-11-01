function createArray(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(i * 5);
    }

    console.log(arr.join(' '));
}

createArray(20);