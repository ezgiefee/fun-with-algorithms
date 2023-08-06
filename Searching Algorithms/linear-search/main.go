//Write a function called linearSearch which accepts an array and a value,
//and returns the index at which the value exists. If the value does not
//exist in the array, return -1.

package main

import "fmt"

func main() {
	arr := []int{10, 15, 20, 30}
	result := linearSearch(arr, 15)
	fmt.Println(result)
}

func linearSearch(arr []int, val int) int {
	for i := 0; i < len(arr); i++ {
		if arr[i] == val {
			return i
		}
	}
	return -1
}
