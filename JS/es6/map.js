
// map es6提供了map的数据结构,类似于对象.但是键的范围不限于字符串.map s实现了iterator接口
// map的属性和方法
let map = new Map();
map.set('name', 'zhangsan');
let name = map.get('name');
map.has('name');
map.delete('name');
map.clear();
