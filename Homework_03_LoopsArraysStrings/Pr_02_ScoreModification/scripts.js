function score(arr) {
    var nums = arr.filter(function(x) {
        return x >= 0 && x <= 400;
    }).map(function(x) {
        return x - x *20 / 100;
    });

    nums.sort(function (a, b){
        return (a-b);
    });

    console.log(nums);
}


score([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);