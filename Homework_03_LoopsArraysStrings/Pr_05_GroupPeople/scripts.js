function groupPeople(param) {
    var obj = {},
        Person,
        people,
        keys,
        len;

    Person = function (fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    };

    people = [
        new Person("Scott", "Guthrie", 38),
        new Person("Scott", "Johns", 36),
        new Person("Scott", "Hanselman", 39),
        new Person("Jesse", "Liberty", 57),
        new Person("Jon", "Skeet", 38)
    ];

    people.forEach(function(element) {
        var key = 'Group ' + element[param],
            value = element.firstName + element.lastName + '(age ' + element.age + ')';
        if (!obj[key]){
            obj[key] = [value];
        }else{
            obj[key].push(value);
        }
    });
    // console.log(obj);
    //{ 'Group 38': [ 'ScottGuthrie(age 38)', 'JonSkeet(age 38)' ],
    //  'Group 36': [ 'ScottJohns(age 36)' ],
    //  'Group 39': [ 'ScottHanselman(age 39)' ],
    //  'Group 57': [ 'JesseLiberty(age 57)' ] }

    keys = Object.keys(obj); //returns an array of object's keys
    len = keys.length;
    keys.sort(function(a, b){
        return a > b;
    });
    // console.log(keys); result -> [ 'Group 36', 'Group 38', 'Group 39', 'Group 57' ]

    for (i = 0; i < len; i++)
    {
        k = keys[i];
        console.log(k + ' : [' + obj[k] + ']');
    }
    console.log();
}


groupPeople('age');
groupPeople('lastName');
groupPeople('firstName');