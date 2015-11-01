function quadraticEquation(a, b, c) {
    var discriminant = (b * b) - (4 * a * c),
        firstRoot,
        secondRoot,
        output;

    if (discriminant > 0) {
        firstRoot = (-b + Math.sqrt(discriminant))/ (2 * a);
        secondRoot = (-b - Math.sqrt(discriminant))/ (2 * a);

        output = 'x1 = ' + firstRoot + '\nx2 = ' + secondRoot;
        return output;
    } else if (discriminant === 0){
        firstRoot = -b / (2 * a);
        output = 'x = ' + firstRoot;
        return output;
    } else {
        output = "No real roots";
        return output;
    }
}

console.log(quadraticEquation(2, 5, -3));