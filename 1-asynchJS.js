// Synchronous

console.log('I');
console.log('eat');
console.log('icecream');
console.log('with');
console.log('a spoon');

// Asynchronous 

console.log('I');
console.log('eat');
setTimeout(() => {
    console.log('icecream');
    console.log('with');
}, 1000);

console.log('a spoon');