package main

import (
	"context"
	"fmt"
	"time"
)

type key string

func main() {
	// 创建一个带有值的 context
	ctx := context.WithValue(context.Background(), key("user"), "John Doe")

	// 在 goroutine 中监听 Value 方法
	go func() {
		if value, ok := ctx.Value(key("user")).(string); ok {
			fmt.Println("User:", value)
		} else {
			fmt.Println("User not found.")
		}
	}()

	// 等待一段时间，以确保监听 Goroutine 打印了消息
	time.Sleep(1 * time.Second)
}
