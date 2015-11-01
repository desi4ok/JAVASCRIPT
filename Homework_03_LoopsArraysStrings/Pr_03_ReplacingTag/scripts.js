function ReplaceTag(str){
    var pattern = /<a([\w\d\s\W\D\S]+)>([\w\w\d\s\W\D\S]+)<\/a>/gi,
        result = str.replace(pattern, '[URL$1]$2[/URL]');

    console.log(result);
}

ReplaceTag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');