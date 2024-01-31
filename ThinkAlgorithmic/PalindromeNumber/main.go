package main

import "fmt"

func main() {
	result := isPalindrome(121)
	fmt.Println(result)
}

func isPalindrome(x int) bool {
	result := 0
	tempX := x

	if x < 0 {
		return false
	}

	for x > 0 {
		temp := x % 10
		result = temp + (10 * result)
		x = x / 10
	}

	return result == tempX

}
