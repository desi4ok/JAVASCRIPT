function arrManipulator(arr) {
    var nums = arr.filter(function(x) {
       return isNaN(x) === false;
    });
    nums.sort(function(x, y) {
        return y > x;
    });

    var minNum = nums[nums.length - 1],
        maxNum = nums[0],
        count = 0,
        maxCount = 0,
        mostFrequent,
        output;

    for (var i = 0; i < nums.length - 1; i++){
        if (nums[i] === nums[i+1]){
            count++;
        } else {
            if (count > maxCount){
                maxCount = count;
                mostFrequent = nums[i];
            }
            count = 0;
        }
    }

    console.log('Min number: ' + minNum + '\nMax number: ' + maxNum + '\nMost frequent number: ' + mostFrequent + '\n');
    console.log(nums);
}


arrManipulator(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);
arrManipulator([8, 17, 8, 10, -1, 8]);