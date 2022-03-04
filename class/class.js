class Human {

    static type = 'Human';

    constructor(properties) {
        this.name = properties.name;
        this.birthYear = properties.birthYear;
        this.eyeColor = properties.eyeColor;
    }

    voice() {
        console.log('ГАУ-ГАУ!');
    }
}

const human = new Human({
    name: 'Name',
    birthYear: 0,
    eyeColor: 'red'
});

console.log(human.type);
console.log(Human.type);
console.log(human);
human.voice();




class Employee extends Human {

    static type = 'Employee';

    constructor(properties) {
        super(properties);
        this.job = properties.job;
    }

    voice() {
        super.voice();
        console.log('CLACK-CLACK!');
    }

    get eye() {
        return this.eyeColor;
    }

    set eye(color) {
        this.eyeColor = color;
    }
}

const employee = new Employee( {
    name: 'Name',
    birthYear: 0,
    eyeColor: 'red',
    job: 'cocksucker'
});

console.log(Employee.type);
console.log(employee);
employee.voice();

employee.eye = 5;
console.log(employee.eye);



