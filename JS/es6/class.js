// class ES6  引入了Class的概念
// 1. class 声明一个类
// 2. constructor 构造函数初始化
// 3. extands 继承父类
// 4. super 调用父类构造方法
// 5. static 定义静态方法和属性
// 6. 父类方法可以重写




class Phone {

    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    call() {
        console.log('call');
    }
}

let onePlus = new Phone('OnePlus', '3999');
console.log(onePlus);
onePlus.call();

class Phone2 extends Phone {
    constructor(brand, price, color) {
        super(brand, price);
        this.color = color;
    }

    call() {
        console.log('video call');
    }

    photo() {
        console.log('photo');
    }
}

const onePlus2 = new Phone2('OnePlus', '3999', 'black');
console.log(onePlus2);
onePlus2.call();

// get set 

class Phone3 {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    get price() {
        console.log('get price');
        return this._price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error('price must be greater than 0');
        }
        console.log('set price');
        this._price = value;
    }

}

let onePlus3 = new Phone3('OnePlus', '3999');
onePlus3.price = 9999;
console.log(onePlus3.price);
