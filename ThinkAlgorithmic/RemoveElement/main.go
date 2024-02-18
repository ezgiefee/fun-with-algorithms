package main

import (
	"fmt"
	"slices"
)

func main() {
	arr := []int{3, 2, 2, 3}
	fmt.Println("First array : ", arr)
	fmt.Println("Array after removing 3 :", removeElement(arr, 3))

}

func removeElement(nums []int, val int) int {
	length := len(nums)
	counter := 0
	for i := 0; i < length; i++ {
		if nums[i] == val {
			nums[i] = 101
			counter++
		}
	}
	slices.Sort(nums)
	fmt.Println(nums)
	newLength := length - counter
	result := make([]int, newLength)
	copy(result, nums[:newLength])
	fmt.Println(result)
	return newLength
}
