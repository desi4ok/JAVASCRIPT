function findYoungestPerson(arr) {
    arr = arr.filter(function(person) {
        return person.hasSmartphone === true;
    }).sort(function(a, b) {
        return a.age > b.age;
    });
    console.log('The youngest person is ' + arr[0].firstname + ' ' + arr[0].lastname);
}

findYoungestPerson(people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }]);