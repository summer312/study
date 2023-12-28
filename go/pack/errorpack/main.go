package main

import (
	"fmt"
)

type CustomError struct {
	Code    int
	Message string
}

func (e *CustomError) Error() string {
	return fmt.Sprintf("Error %d: %s", e.Code, e.Message)
}

func process() error {
	return &CustomError{Code: 1001, Message: "Custom error occurred"}
}

func main() {
	err := process()
	if err != nil {
		fmt.Println(err)
		if customErr, ok := err.(*CustomError); ok {
			fmt.Println("Custom error code:", customErr.Code)
		}
	}
}

// underlyingError returns the underlying error for known os error types.
func fn() error {
	x, err := bar.Foo()
	if err != nil {
		return err
	}

	// use x
	return nil
}
