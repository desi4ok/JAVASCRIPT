function sortArrayOfNums(arr) {
    arr = arr.sort(function (a, b){
        return a - b;
    });

    console.log(arr.join(', '));
}

sortArrayOfNums([5, 4, 3, 2, 1]);
sortArrayOfNums([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);