function calcCircleArea() {
    var radius = document.getElementById('input-radius').value;
    if (!Number(radius)){
        console.log("You have to enter a number");
    }
    var outputDiv = document.getElementById('outputArea');

    var area = Math.pow(radius, 2) * Math.PI;
    var output = 'r = ' + radius + '; area = ' + area;
    outputDiv.innerHTML += output + '<br/>';
}

//console.log(calcCircleArea(7));