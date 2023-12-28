// 定义一个构造函数
function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log("Hello, my name is " + this.name);
    }
}

// 在构造函数的 prototype 上添加方法
Person.prototype.sayHello = function() {
    console.log("Hello, my new name is " + this.name);
};

// 创建 Person 的实例
let person1 = new Person("John");
let person2 = new Person("Alice");

console.log(typeof(person1));  // 输出: John

console.log(person1);  

// 调用继承自 prototype 的方法
person1.sayHello();  // 输出: Hello, my name is John
person2.sayHello();  // 输出: Hello, my name is Alice
