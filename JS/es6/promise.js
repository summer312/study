// Promise  异步编程的新解决方案，语法上Promise是一个构造函数，用来生成Promise实例。


const promise = new Promise((resolve, reject) => {
    // 异步操作
    setTimeout(() => {
        resolve('hello world')
    }, 1000)
})
// then方法接收两个参数，第一个是成功回调，第二个是失败回调，返回结果是promise对象，对象状态是由回调函数的执行结果决定。
// 1. 如果回调函数中返回的结果不是promise对象，状态为成功，返回值为对象的成功值
// 2. 如果回调函数中返回的结果是promise对象，则会等待该promise对象执行完毕，然后将结果返回给then方法的下一个回调函数。
const result = promise.then(res => {
    // 1. 非promise对象
    // return 'hello world'

    // 2. promise对象
    return new Promise((resolve, reject) => {
        resolve('hello new world')
    })

    // 3. 抛出错误

    throw new Error('出错了')
}, err => {
    console.log(err)
})


promise.catch(err => {
    console.log(err)
})
console.log(result)


