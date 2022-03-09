function* fuckGenerator() {
    yield 'F';
    yield 'U';
    yield 'C';
    yield 'K';
    yield '!';
}

const str = fuckGenerator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* numberGen(countOfNumbers) {
    for(let i = 1; i <= countOfNumbers; i++) {
        yield i;
    }
}

const number = numberGen(3);
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());

for(let value of numberGen(7)) {
    console.log(value);
}









