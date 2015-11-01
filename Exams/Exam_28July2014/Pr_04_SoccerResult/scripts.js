function soccerResult(input) {
    var results = { };
    for (i in input) {
        var matchResults = input[i].split(/[\/:-]+/);
        var teamHome = matchResults[0].trim();
        var teamAway = matchResults[1].trim();
        var goalsHome = Number(matchResults[2].trim());
        var goalsAway = Number(matchResults[3].trim());
        processResults(results, teamHome, teamAway, goalsHome, goalsAway);
        processResults(results, teamAway, teamHome, goalsAway, goalsHome);
    }

    // Sort the results structure
    results = sortObjectProperties(results);
    for (var team in results) {
        results[team].matchesPlayedWith.sort();
    }

    // Print the results as JSON string
    console.log(JSON.stringify(results));

    function processResults(results, teamHome, teamAway, goalsHome, goalsAway) {
        if (!results[teamHome]) {
            results[teamHome] = { goalsScored: 0, goalsConceded: 0, matchesPlayedWith: []};
        }
        results[teamHome].goalsScored += goalsHome;
        results[teamHome].goalsConceded += goalsAway;
        if (results[teamHome].matchesPlayedWith.indexOf(teamAway) == -1) {
            results[teamHome].matchesPlayedWith.push(teamAway);
        }
    }

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}

var input = ['Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'];

soccerResult(input);