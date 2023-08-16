package main

import "fmt"

func main() {
	numbers := []int{6, 1, 3, 5, 4, 2}
	result := selectionSort(numbers)
	fmt.Println(result)
}

func swap(a *int, b *int) {
	temp := *a
	*a = *b
	*b = temp
}

func selectionSort(arr []int) []int {
	length := len(arr)
	for i := 0; i < length-1; i++ {
		minIndex := i
		for j := i + 1; j < length; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
			fmt.Println("i:", i, " j:", j, " arr[i]:", arr[i], " arr[j]:", arr[j], " small:", arr[minIndex])
		}
		swap(&arr[i], &arr[minIndex])
		fmt.Println(arr)
	}
	return arr
}
