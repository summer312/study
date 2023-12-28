package main

import (
	"fmt"
	"time"
)

// func gen() <-chan int {
// 	ch := make(chan int)
// 	go func() {
// 		var n int
// 		for {
// 			ch <- n
// 			n++
// 			time.Sleep(time.Second)
// 		}
// 	}()
// 	return ch
// }
// func main() {

// 	for n := range gen() {
// 		fmt.Println(n)
// 		if n == 5 {
// 			break
// 		}
// 	}
// 	// ……
// }


//  改进  增加一个 context，在 break 前调用 cancel 函数，取消 goroutine。gen 函数在接收到取消信号后，直接退出，系统回收资源。
func gen(ctx context.Context) <-chan int {
	ch := make(chan int)
	go func() {
		var n int
		for {
			select {
			case <-ctx.Done():
				return
			case ch <- n:
				n++
				time.Sleep(time.Second)
			}
		}
	}()
	return ch
}
func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel() // 避免其他地方忘记 cancel，且重复调用不影响
	for n := range gen(ctx) {
		fmt.Println(n)
		if n == 5 {
			cancel()
			break
		}
	}
	// ……
}
