// 方法中，this 表示该方法所属的对象。
// 如果单独使用，this 表示全局对象。
// 在函数中，this 表示全局对象。
// 在函数中，在严格模式下，this 是未定义的(undefined)。
// 在事件中，this 表示接收事件的元素。
// 类似 call() 和 apply() 方法可以将 this 引用到任何对象。
var a = '333'

function thisFunction() {
    console.log(this.a)
}

thisFunction() // 输出：333

var obj = {
    a: '444',
    fn: thisFunction
}

obj.fn() // 输出：444

var obj2 = {
    a: '555',
    fn: function() {
        console.log(this.a)
    }
}

obj2.fn() // 输出：555