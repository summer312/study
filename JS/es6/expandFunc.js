// 数值扩展

Number.EPSILON = 2.2204460492503130808472633361816E-16; // 浮点数误差范围,JavaScript表示最小精度

Number.isFinite(123); // true 检测数值是否为有限数值
Number.isNaN(123); // false 检测数值是否为 NaN
Number.parseInt('123blue'); // 123 转换字符串为整数
Number.parseFloat('3.14blue'); //转换字符串为浮点数
Number.isInteger(123); // true 检测数值是否为整数

Math.trunc(123.456); // 123 去除小数部分
Math.sign(123); // 1 获得数值的符号
Math.cbrt(123); // 5.154943791774485 获得数值的立方根
Math.hypot(3, 4); // 5 获得两个数值的平方和的平方根
Math.log2(123); // 7.009460


Object.is(123, 123); // true 判断两个值是否完全相等
Object.assign(target, source); // 对象的合并
Object.setPrototypeOf(target, source);// 设置原型对象
Object.getPrototypeOf(target);// 获取原型对象