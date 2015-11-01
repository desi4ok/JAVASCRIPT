function maxSequence(arr) {
    var maxSeq = [],
        seq = [],
        count = 1,
        maxCount = 0,
        len = arr.length;

    seq.push(arr[0]);
    maxSeq.push(arr[0]);
    for (var i = 1; i < len; i++){
        if((i === len-1) && (arr[i] > arr[i-1])){
            count += 1;
            seq.push(arr[i]);
            if (count >= maxCount){
                maxSeq = seq;
            }
        }else if(arr[i] > arr[i-1]){
            count += 1;
            seq.push(arr[i]);
        }else{
            if(count >= maxCount){
                maxCount = count;
                count = 1;
                maxSeq = seq;
                seq = [];
                seq.push(arr[i]);
            }else{
                count = 1;
                seq = [];
                seq.push(arr[i]);
            }
        }
    }

    if (maxCount === 1 || len === 1)
        console.log('no');
    else
        console.log(maxSeq);
}

maxSequence([3, 2, 3, 4, 2, 2, 4]);
maxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
maxSequence([3, 2, 1]);
maxSequence([1]);