function daggersSwords(arr){
        var output = '<table border="1">' + '\n' + '<thead>' + '\n' + '<tr><th colspan="3">Blades</th></tr>' + '\n' +
                 '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>' + '\n' + '</thead>' + '\n' + '<tbody>' + '\n';

        for (var row in arr){
            var len = parseInt(arr[row]),
                dagger = 'dagger',
                diff = len % 5,
                type = '';

            switch(diff) {
                case 0:
                    type = '*rap-poker';
                    break;
                case 1:
                    type = 'blade';
                    break;
                case 2:
                    type = 'quite a blade';
                    break;
                case 3:
                    type = 'pants-scraper';
                    break;
                case 4:
                    type = 'frog-butcher';
                    break;
                default: break;
            }

            if (len > 40){
                dagger = 'sword';
            }

            if (len > 10) {
                output += '<tr><td>' + len + '</td><td>' + dagger + '</td><td>' + type + '</td></tr>' + '\n';
            }
        }
    output += '</tbody>' + '\n' + '</table>';

    console.log(output);
}

var input = ['17.8', '19.4', '13', '55.8', '126.96541651', '3'];

daggersSwords(input);
