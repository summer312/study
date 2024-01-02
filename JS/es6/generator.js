// 生成器 Generator 是es6提供的一种异步编程解决方案，它可以暂停函数的执行，并返回一个可以恢复执行的函数。

function* foo(arg) {
    console.log('执行了foo');
    let one = yield 1;
    console.log('执行了foo1');
    let two = yield 2;
    console.log('执行了foo2');
    let three = yield 3;
    console.log('执行了foo3');
}

const generator = foo();

// console.log(generator);
// console.log(generator.next());// { value: 1, done: false }

console.log(generator.next("AAA"))
console.log(generator.next("BBB"))
console.log(generator.next("CCC"))
// for (const v of generator) {
//     i++
//     console.log(v);
// }


function getUsers() {
    setTimeout(() => {
        let data = 'user data';
        iterator.next(data);
    }, 1000);
}

function getOrders() {
    setTimeout(() => {
        let data = 'Order data';
        iterator.next(data);
    }, 1000);
}

function getGoods() {
    setTimeout(() => {
        let data = 'Order data';
        iterator.next(data);
    }, 1000);
}

function* bar() {
    let users = yield getUsers();
    let orders = yield getOrders();
    let goods = yield getGoods();
}

let iterator = bar()
iterator.next()