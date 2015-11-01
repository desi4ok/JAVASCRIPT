function courseGrade(input) {
    input = input.filter(function increasing(element) {
        element.score += element.score * 10 /100;
        if (element.score >= 100) {
            element.hasPassed = true;
            return element;
        }
    });

    input = input.sort(function sortByName(name1, name2) {
        return name1.name > name2.name;
    })

    console.log(input);
}

courseGrade([
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]);