function arrayObjectExtractor(arr) {
    var newArr = [];
    arr.filter(function(element){
        if (typeof(element) === 'object' && !Array.isArray(element)) {
            newArr.push(element);
        }
    });
    console.log(newArr);
}

arrayObjectExtractor([
        "Pesho",
        4,
        4.21,
        { name : 'Valyo', age : 16 },
        { type : 'fish', model : 'zlatna ribka' },
        [1,2,3],
        "Gosho",
        { name : 'Penka', height: 1.65}
    ]);
