package main

import "fmt"

func main() {
	fmt.Println(isPalindrome(121))
}

func isPalindrome(x int) bool {
	result := 0
	tempX := x
	res := false

	if x < 0 {
		res = false
	}

	for x > 0 {
		temp := x % 10
		result = temp + (10 * result)
		x = x / 10
	}

	if result == tempX {
		res = true
	}
	return res
}
