function calcCylinderVol(radius, height) {
    var cylVol = Math.PI * Math.pow(radius, 2) * height,
        output = console.log(cylVol.toFixed(3));

    return output;
}

calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);
