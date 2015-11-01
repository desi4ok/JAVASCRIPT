function decToHex(decimalNum){
    var hexNum = Number(decimalNum).toString(16);
    return hexNum;
}

var promptWindow = window.prompt('Enter a decimal number');
alert(decToHex(promptWindow).toUpperCase());