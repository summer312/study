package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel() // 避免其他地方忘记 cancel，且重复调用不影响
	ids := fetchWebData(ctx)
	fmt.Println(ids)
}
func fetchWebData(ctx context.Context) (res []int64) {
	any := <-ctx.Done()
	fmt.Println("fetchWebData done:", any)
	
	select {
	case <-time.After(3 * time.Second):
		return []int64{100, 200, 300}
	case <-ctx.Done():
		return []int64{1, 2, 3}
	}
}
