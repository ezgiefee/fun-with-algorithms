//Write a function called binarySearch which accepts a sorted array and
//a value and returns the index at which the value exists. Otherwise, return -1.

package main

import (
	"fmt"
	"log"
)

func main() {
	arr := []int{5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99}
	result := binarySearch(arr, 10)
	fmt.Println(result)
}

func binarySearch(arr []int, val int) int {
	start := 0
	end := len(arr) - 1
	middle := (start + end) / 2
	log.Println("start:", start, " end:", end, " middle:", middle)
	for arr[middle] != val && start <= end {
		if val < arr[middle] {
			end = middle - 1
		} else {
			start = middle + 1
		}
		log.Println(middle)
		middle = (start + end) / 2
	}
	if arr[middle] == val {
		return middle
	}
	return -1
}
