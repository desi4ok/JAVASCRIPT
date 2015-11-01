function captainObvious(arr){
    var wordsFromText = arr[0].toLowerCase().split(/\W+/g),
        uniqueWords = [],
        repeatedWords = [],
        secondText = arr[1],
        sentences = arr[1].split(/[.!?]/g),
        signs = [],
        countWords = 0,
        countSentences = 0,
        count = 0,
        output = '';

    for (var symbol in secondText){
        if(secondText[symbol] == '.' || secondText[symbol] == '!' || secondText[symbol] == '?'){
            signs.push(secondText[symbol]);
        }
    }

    if (wordsFromText[wordsFromText.length - 1] == '' ){
        wordsFromText.pop();
    }

    if (sentences[sentences.length - 1] == ''){
        sentences.pop();
    }
    uniqueWords = wordsFromText.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });

    for(var a in uniqueWords){
        countWords = 0;
        for(var b in wordsFromText){
            var firstWor = uniqueWords[a];
            var secondWor = wordsFromText[b];
            if(firstWor == secondWor){
                countWords += 1;
            }
        }
        if (countWords >= 3){
            repeatedWords.push(firstWor);
        }

    }

    if (countWords == 0){
        output += 'No Words';
    }else {
        for (var c in sentences) {
            var words = sentences[c].split(/\W+/g);
            for (var d in repeatedWords) {
                for (var e in words) {
                    var firstWord = repeatedWords[d];
                    var secondWord = words[e].toLowerCase();
                    if (firstWord == secondWord) {
                        countSentences += 1;
                        count += 1;
                    }
                }
            }
            if (countSentences >= 2) {
                output += sentences[c].trim() + signs[c] + '\n';
            }
            countSentences = 0;
        }
        if (count == 0 || count == 1){
            output += 'No sentences';
        }
    }
    console.log(output);
}

//var input = ["as.",
//'as as as.'];
var input = ['sdfsddf sadfsd', 'sasdafas'];
captainObvious(input);