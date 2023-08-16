package main

import "fmt"

func main() {
	arr := []int{6, 1, 5, 3, 2, 4}

	fmt.Println("Before sorting:", arr)

	insertionSort(arr)

	fmt.Println("After sorting:", arr)
}

func insertionSort(arr []int) {
	lentgh := len(arr)
	for i := 1; i < lentgh; i++ {
		key := arr[i]
		j := i - 1
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = key
	}
}
