// rest 参数，用于获取函数的实参，用来代替 arguments 对象
// rest 参数必须是最后一个参数

function sum() {
    console.log(arguments);
}


function sumRest(...args) {
    console.log(args);
}



sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);