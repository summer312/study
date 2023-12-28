package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	// 创建一个带有取消功能的 context
	ctx, cancel := context.WithCancel(context.Background())

	// 在 goroutine 中监听 Err 方法
	go func() {
		select {
		case <-ctx.Done():
			fmt.Println("Context is canceled. Error:", ctx.Err())
		}
	}()

	// 调用 cancel 函数取消 context
	cancel()

	// 等待一段时间，以确保监听 Goroutine 打印了消息
	time.Sleep(1 * time.Second)
}
