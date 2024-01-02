// Set 
let s = new Set();

s.add(1);
s.delete(1);
s.has(1);
s.clear();

// for (let value of s) {
//     console.log(value);
// }


// 1. 数组去重
let arr = [1, 2, 2, 3, 4, 4, 5];
let newArr = [...new Set(arr)];

// 2. 交集
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let newArr2 = [...new Set(arr1)].filter(item => {
    let s2 = new Set(arr2);
    if (s2.has(item)) {
        return true;
    } else {
        return false;
    }
});

// 3. 并集
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [4, 5, 6, 7, 8];
let newArr3 = [...new Set([...arr3,...arr4])]

// 4. 差集
let arr5 = [1, 2, 3, 4, 5];
let arr6 = [4, 5, 6, 7, 8];
let newArr4 = [...new Set([...arr5,...arr6])].filter(item => {
    let s3 = new Set(arr5);
    if (!s3.has(item)) {
        return true;
    } else {
        return false;
    }s
});
