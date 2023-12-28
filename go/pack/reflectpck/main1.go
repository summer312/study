package main

import (
	"fmt"
	"reflect"
)

func main() {
	var x float64 = 6.3

	p := reflect.ValueOf(&x)
	if p.Kind() == reflect.Ptr {
		fmt.Println(p.Elem().Kind())
	}

	v := p.Elem()
	v.SetFloat(7.3)

	fmt.Printf("x: %v\n", x)
	fmt.Printf("x: %T\n", x)
}

