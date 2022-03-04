const person = {
    name: 'name',
    age: 0,
    eyeColor: 'transparent'
}

const objProxy = new Proxy(person, {
    get(target, property) {
        console.log(`Getting property ${property}.`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`Setting property ${property}.`);
        if (property in target) {
            target[property] = value;
        } else throw new Error(`No such ${property} property in person object.`)
    },
    has(target, property) {
        return Object.keys(target).includes(property);
    },
    deleteProperty(target, property) {
        console.log(`Deleting ${property} property.`);
        delete target[property];
    }
});

objProxy.name = '123';
console.log(objProxy.name);
console.log('abc' in objProxy);
delete objProxy.eyeColor;

const func = (value) => 'FUNC: ' + value;

const funcProxy = new Proxy(func, {
    apply(target, thisArg, args) {
        return target.apply(thisArg, args).toUpperCase();
    }
})

console.log(funcProxy('FUCKINGFUCK'));

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const PersonClassProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Cunstructor called.')

        // return new target(...args);
        
        return new Proxy(new target(...args), {
            get(target, property) {
                console.log(`Getting property ${property}.`);
                return target[property];
            }
        })
    }
});

const personProxy = new PersonClassProxy('MYNAMEIS', 'AGE OF A DINASOUR');
console.log(personProxy.name);