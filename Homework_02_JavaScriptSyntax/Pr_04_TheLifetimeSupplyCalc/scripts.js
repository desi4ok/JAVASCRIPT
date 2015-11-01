function calcSupply(age, maxAge, food, foodPerDay){
    var years = maxAge - age,
        amount = years * 365 * foodPerDay,
        output = console.log(amount + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');

    return output;
}

calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(20, 87, 'fruits', 2);
calcSupply(16, 102, 'nuts', 1.1);