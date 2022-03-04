function buildUrl(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = buildUrl('com');
const byUrl = buildUrl('by');

//comUrl now 'https:// + url + '.com'
//byUrl now 'https:// + url + '.by'
console.log(comUrl('google'));
console.log(comUrl('vk'));
console.log(byUrl('onliner'));
console.log(byUrl('kufar'));

//practice
const person1 = { name: 'Fedor', age: 14, job: 'hippy' };
const person2 = { name: 'Adrew', age: 26, job: 'panicer' };

function logPerson() {
    console.log(`Person ${this.name}, age: ${this.age}, job: ${this.job}`);
}

function myBind(object, printFunction) {
    return printFunction.call(object); //or .bind(object)();    
}

myBind(person1, logPerson);
myBind(person2, logPerson);