class Person {
    static printPeople(persons) {
        console.log(persons);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const teo = new Person('Teo', 10);
const ti = new Person('Ti', 10);
// console.log(teo);
// function printPeople(persons) {
//     console.log(persons);
// }
Person.printPeople([teo, ti]);
