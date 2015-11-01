function cloneObject(obj) {
    var clonedObj = obj.constructor();

    for(var key in obj) {
        if (obj.hasOwnProperty(key))
            clonedObj[key] = obj[key];
    }
    return clonedObj;
}

function compareObject(a) {
    var b = cloneObject(a),
        output = console.log('a == b -> ' + (a === b ? true : false));
    return output;
}

var input = {name: 'Pesho', age: 21};
compareObject(input);