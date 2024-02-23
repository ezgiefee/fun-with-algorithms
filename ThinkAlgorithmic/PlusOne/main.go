package main

import (
	"fmt"
)

func main() {
	var num = []int{9, 9, 9, 9, 9, 9, 9, 9, 9}
	fmt.Println(plusOne(num))
}

func plusOne(digits []int) []int {
	length := len(digits)

	for i := length - 1; i >= 0; i-- {
		digits[i]++
		if digits[i] == 10 {
			digits[i] = 0
		} else {
			return digits
		}
	}
	return append([]int{1}, digits...)
}
