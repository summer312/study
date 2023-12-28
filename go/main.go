package main

import (
	"fmt"
	"time"
)

var notifier chan interface{}

func startGlobalPanicCapturing() {
	notifier = make(chan interface{})
	fmt.Println(2)
	go func() {
		for {
			select {
			case r := <-notifier:
				fmt.Println(r)
			}
		}
	}()
}
func main() {
	startGlobalPanicCapturing()
	// 产生恐慌，但该恐慌会被捕获
	fmt.Println(1)
	Go(func() {
		a := make([]int, 1)
		println(a[1])
	})
	fmt.Println(6)
	time.Sleep(time.Second)
}

// Go 是一个恐慌安全的 goroutine
func Go(f func()) {
	fmt.Println(3)
	go func() {
		defer func() {
			fmt.Println(4)
			if r := recover(); r != nil {
				notifier <- r
			}
		}()
		f()
	}()
	fmt.Println(5)
}
