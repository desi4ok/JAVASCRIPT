function compareChars(arr1, arr2) {
    var equal = 'Equal',
        output;

    if (arr1.length === arr2.length){
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                equal = 'Not Equal';
                break;
            }
        }
    }else{
        equal = 'Not Equal';
    }

    output = console.log(equal);
    return output;
}


var array1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    array2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];

compareChars(array1, array2);

var array1 = ['3', '5', 'g', 'd'],
    array2 = ['5', '3', 'g', 'd'];

compareChars(array1, array2);

var array1 = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    array2 = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];

compareChars(array1, array2);