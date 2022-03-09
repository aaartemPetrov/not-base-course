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

//default value for undefined properties by proxy
const defaultValue = (object, defaultValue = 0) => {
    return new Proxy(object, {
        get(target, property) {
            return property in target ? target[property] : defaultValue;
        }
    });
}

const bird = defaultValue({
    name: 'pigeon',
    weight: '1200g'
}, 'can fly');

console.log(bird.isFlying);

//hidden properties
const hiddenProperties = (object, prefix = '_') => {
    return new Proxy(object, {
        has(target, property) {
            return property in target && !property.startsWith(prefix);
        },
        ownKeys(target) {
            return Reflect.ownKeys(target).filter(key => !key.startsWith(prefix));
        },
        get(target, property, receiver) {
            return property in receiver ? target[property] : undefined;
        }
    });
}

const car = hiddenProperties({
    brand: 'nissan',
    model: 'juke',
    _serial: 1234567
});

console.log('model' in car);
console.log('_serial' in car);
console.log(car._serial);

//optimization

const IndexedArray = new Proxy(Array, {
    construct(target, ...args) {
        const indexed = {};
        args.forEach(item => indexed[item.id] = item);

        return new Proxy(new target(...args), {
            get(target, property) {
                switch (property) {
                    case 'push':
                        return item => {
                            indexed[item.id] = item;
                            return target[property].call(target, item);
                        }
                    case 'findById':
                        return id => indexed[id];
                    default:
                        return target[property];
                }
            }
        })
    }
})

const persons = new IndexedArray(
    {id: 100, name: 'Artem'},
    {id: 200, name: 'Vlad'});


persons.push({id: 333, name: 'Petrson'});
console.log(persons[2]);
console.log(persons.findById(333));