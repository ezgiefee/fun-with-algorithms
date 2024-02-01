package main

import "fmt"

func main() {
	nums := []int{1, 1}
	fmt.Println(removeDuplicates(nums))
}

func removeDuplicates(nums []int) int {
	counter := 0
	length := len(nums)
	fmt.Println(sortArray(nums))
	for i := 1; i < length; i++ {
		if nums[i-1] == nums[i] {
			slideArray(nums, i)
			i--
			counter++
			length--
		}
	}
	fmt.Println(nums)
	return len(nums) - counter
}

func sortArray(nums []int) []int {
	length := len(nums)

	for i := 0; i < length-1; i++ {
		for j := i + 1; j < length; j++ {
			if nums[i] > nums[j] {
				temp := nums[i]
				nums[i] = nums[j]
				nums[j] = temp
			}
		}
	}
	return nums
}

func slideArray(nums []int, i int) []int {
	length := len(nums)
	for j := i + 1; j < length; j++ {
		nums[j-1] = nums[j]
	}
	nums[length-1] = '_'
	return nums
}
