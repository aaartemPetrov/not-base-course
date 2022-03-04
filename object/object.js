const human = Object.create(
    {
        someFunction() {
            return 'Age: ' + this.age;
        }
    },
    {
        name: {
            value: 'name',
            //descrtiptors
            enumerable: true, //can be iterated
            writable: true, //can be changed
            configurable: true //property can be deleted
        },
        birthYear: {
            value: 0,
            //descriptors
            enumerable: false, //cant be iterated
            writable: false, // cant be changed
            configurable: false // property cant be deleted
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear; // or return age;
            },
            set(value) {
                age = value; // cant set coz of get return 
            }
        }
    })

for (let key in human) console.log(key, human[key]); //there aren't key 'age' here
delete human.age; // cant
human.age = 5; // cant
console.log(human.age);

console.log(human.someFunction());

//with enumerable prototype properties
console.group('with enumerable prototype properties');
for (let key in human) {
    console.log(key);
}
console.groupEnd();

//without
console.group('without');
for (let key in human) {
    if (human.hasOwnProperty(key)) {
        console.log(key);
    }
}
console.groupEnd();

