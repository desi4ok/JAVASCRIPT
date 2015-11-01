//function sortTable(arr){
//    var str = '',
//        len = arr.length - 1,
//        productInfo = {},
//        output = '<table>' + '\n' + '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>' + '\n';
//
//    for (var i = 2; i < len; i += 1){
//        str = arr[i];
//
//        var temp = str.match(/<td>[^>]+<\/td>/g),
//            product = temp[0].replace('<td>', '').replace('<\/td>', ''),
//            price = (temp[1].replace('<td>', '').replace('<\/td>', '')),
//            votes = temp[2].replace('<td>', '').replace('<\/td>', '');
//
//        if (!productInfo[price]) {
//            productInfo[price] = {};
//        }
//        if (!productInfo[price][product]) {
//            productInfo[price][product] = [];
//        }
//        if (productInfo[price][product].indexOf(votes) == -1) {
//            productInfo[price][product].push(votes);
//        }
//    }
//
//        var keysSorted = Object.keys(productInfo).sort(function(a, b){
//            return (a - b);
//        });
//    for (var price in productInfo) {
//        productInfo[price] = sortProducts(productInfo[price]);
//    }
//    function sortProducts(obj) {
//        var keysSorted = Object.keys(obj).sort();
//        var sortedObj = {};
//        for (var i = 0; i < keysSorted.length; i++) {
//            var key = keysSorted[i];
//            sortedObj[key] = obj[key];
//        }
//        return sortedObj;
//    }
//
//    for (var i = 0; i < keysSorted.length; i += 1){
//        var key = keysSorted[i].toString();
//        for (var product in productInfo[key]) {
//            output += '<tr><td>' + product + '</td><td>' + key + '</td><td>' +
//            productInfo[key][product] + '</td></tr>' + '\n';
//        }
//    }
//
//    output += '</table>';
//console.log(output);
//}

// 80 / 100 points !!!!!!!!!!!!!!!!!!!!

var input = ['<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>100000</td><td>+33</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+8</td></tr>',
    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>'];

sortTable(input);


//autor's solution
function sortTable(input) {
    var rows = [];
    for (var i = 2; i < input.length - 1; i++) {
        var rowData = input[i];
        var regex = /<td>.*?<\/td><td>(.*?)<\/td>/g;
        var match = regex.exec(rowData);
        var price = Number(match[1]);
        var row = { price: price, data: rowData };
        rows.push(row);
    }
    rows.sort(function (a, b) {
        if (a.price != b.price) {
            return a.price - b.price;
        } else {
            return a.data == b.data ? 0 : a.data < b.data ? -1 : 1;
        }
    });
    console.log(input[0]);
    console.log(input[1]);
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].data);
    }
    console.log(input[input.length - 1]);
}