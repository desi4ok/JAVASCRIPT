function sortLettersInString(input, bool) {
//        input = input.split('');
//        var newStr = '';
//
//    if (bool === false){
//        input.sort(function(a, b) {
//            return a.toLowerCase() < b.toLowerCase();
//        });
//    }else{
//        input.sort(function(a, b) {
//            return a.toLowerCase() > b.toLowerCase();
//        });
//    }
//
//    input.forEach(function(element){
//       newStr += element;
//    });
//    console.log(newStr);


//Better solution:
    input = input.split('').sort(function (a, b) {
        return a.toLowerCase() > b.toLowerCase();
    });

    bool ? console.log(input.join('')) : console.log(input.reverse().join(''))
}

sortLettersInString('HelloWorld', true);
sortLettersInString('HelloWorld', false);