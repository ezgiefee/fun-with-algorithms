package main

import (
	"fmt"
)

func main() {
	arr := []int{10, 7, 8, 9, 1, 5}
	fmt.Println("Unsorted array:", arr)

	quickSort(arr, 0, len(arr)-1)
	fmt.Println("Sorted array:", arr)
}

func quickSort(arr []int, low, high int) {
	if low < high {
		pivotIndex := partition(arr, low, high)
		quickSort(arr, low, pivotIndex-1)
		quickSort(arr, pivotIndex+1, high)
	}
}

func partition(arr []int, low, high int) int {
	pivot := arr[high]
	i := low - 1

	for j := low; j < high; j++ {
		if arr[j] < pivot {
			i++
			arr[i], arr[j] = arr[j], arr[i]
		}
	}

	arr[i+1], arr[high] = arr[high], arr[i+1]
	return i + 1
}
