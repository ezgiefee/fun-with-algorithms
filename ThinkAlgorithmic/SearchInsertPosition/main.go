package main

import "fmt"

func main() {
	nums := []int{1, 3, 5, 6}
	fmt.Println(searchInsert(nums, 7))
}

func searchInsert(nums []int, target int) int {
	position := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == target || target < nums[i] {
			return i
		} else {
			position++
		}
	}
	return position
}
