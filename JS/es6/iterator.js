// 迭代器（Iterator） 迭代器是一种接口，它可以为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

// 原生具备迭代器接口的数据结构：
// 1. 数组
// 2. arguments
// 3. Set
// 4. String
// 5. Map
// 6. NodeList
// 7. typedArray


let arr = ["中", "英", "美", "法"];

for (let v of arr) {
    console.log(v);
}

console.log(arr)

// 工作原理
// a) 创建一个指针对象，指向当前数据结构的起始位置
// b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
// c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
// d)每调用next 方法返回一个包含 value 和 done 属性的对象

let iterator = arr[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next()); // { value: '中', done: false }
console.log(iterator.next());


// 自定义遍历

const engeers = {
    name: "张三",
    language: [
        'java',
        'javaScript',
        'python',
        'c++',
        'php'
    ],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.language.length) {
                    return {
                        value: this.language[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }

            }
        }
    }
}


for (const iterator of engeers) {
    console.log(iterator);
}