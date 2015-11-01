function calcExpression(){
    var input = document.getElementById('input-field').value;

    if(! /[1-9\-+*/()]/.test(input)) {
        alert('You have entered an invalid character!');
    } else {
        var result = eval(input),
            output = document.getElementById("output-field");

        output.innerHTML = result.toString();
    }


}


