// 扩展运算符 ... 能将数组转化为逗号分隔的参数序列
function sum() {
    console.log(arguments);
}

let arr = [1, 2, 3];
sum(arr);
// 扩展运算符 ... 合并数组

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 扩展运算符... 数组克隆
let arr4 = [1, 2, 3];
let arr5 = [...arr4];
console.log(arr5);


// 扩展运算符... 将伪数组转为真正的数组


