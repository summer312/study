// Symbol ES6的新数据类型，用来表示独一无二的类型
// 1. Symbol的值是唯一的，用来解决命名冲突
// 2. Symbol的值不能与其他数据进行计算，包括同字符串拼串
// 3. Symbol定义的对象属性不能用for...in循环遍历但是可以使用Reflect.ownKeys()返回所有属性

// Symbol 内置值
// Symbol.hasInstance() 当其他对象使用instanceof运算符时，判断是否为搞对象的实例会调用该方法
// Symbol.isConcatSpreadable() 当使用Array.prototype.concat()时，会调用该方法
// Symbol.iterator() 当使用for...of循环时，会调用该方法
// Symbol.match() 当使用String.prototype.match()时，会调用该方法
// Symbol.replace() 当使用String.prototype.replace()时，会调用该方法
// Symbol.search() 当使用String.prototype.search()时，会调用该方法
// Symbol.species() 创建派生类时，会调用该方法
// Symbol.split() 当使用String.prototype.split()时，会调用该方法
// Symbol.toPrimitive() 当使用+运算符时，会调用该方法
// Symbol.toStringTag() 当使用Object.prototype.toString()时，会调用该方法
// Symbol.unscopables() 当使用with语句时，会调用该方法


let s1 = Symbol();
console.log(s1, typeof s1);

let s2 = Symbol("姜楠");
let s3 = Symbol("姜楠");

console.log(s2, typeof s2);
console.log(s3, typeof s3);
console.log(s2 === s3);
console.log(s2 == s3);

let s4 = Symbol.for("姜楠");
let s5 = Symbol.for("姜楠");

console.log(s4, typeof s4);
console.log(s5, typeof s5);
console.log(s4 === s5);
console.log(s4 == s5);



let obj = {
    up: () => "up",
    down: () => "down",
}
let tem = {
    up: Symbol(),
    down: Symbol(),
}

obj[tem.up] = () => "Symbol up";
obj[tem.down] = () => "Symbol down";

console.log(obj);