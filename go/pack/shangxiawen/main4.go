package main

import "fmt"

type myStruct struct {
}

var (
	background = myStruct{}
	todo       = myStruct{}
	background1 = new(myStruct)
	todo1       = new(myStruct)
)

func main() {
	fmt.Printf("%T \n",background)
	fmt.Printf("%T \n",todo)
	fmt.Printf("%T \n",background1)
	fmt.Printf("%T \n",todo1)
}
