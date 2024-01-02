// 模块化 -- 是指将一个大的文件拆分成许多小的文件,然后再将小的文件组合起来
// 优点:
// 1. 代码复用
// 2. 高维护性
// 3. 防止命名冲突


// export 导出,规定模块的对外接口


// 1. 导出
// 1.1 导出一个值
export const a = 1;
export const b = 2;
export const c = 3;

// 1.2 导出一个函数
export function add(x, y) {
  return x + y;
}

// 1.3 默认暴露

export default  {
    score: 99,
    add(x, y) {
        return x + y;
    }
}


// import 导入,输入其他模块提供的功能

// 导入 - 通用
import * as index from './index.js';
// 导入 - 解构赋值
import { a, b, c } from './a.js';
// 导入 - 简便形式
import a from './a.js';