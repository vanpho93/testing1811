class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Chao, toi la ${this.name}`);
    }
}

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }
    cry() {
        console.log(`${this.name} is crying.`);
    }

    sayHello() {
        super.sayHello();
        console.log(`Chao, em la ${this.name}, thich choi ${this.toy}`);
    }
}

const teo = new Child('Teo Nguyen', 10, 'May bay');
teo.cry();
teo.sayHello();
console.log(teo.name, teo.age);

/*

const Singer = mongoose.model('Singer', singerSchema);

Singer.findById(...)

class MySinger extends Singer {}

*/
