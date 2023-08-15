package main

import "fmt"

func main() {
	numbers := []int{5, 4, 1, 6, 3}
	result := bubleSort(numbers)
	fmt.Println(result)
}

func bubleSort(numbers []int) []int {
	length := len(numbers)
	for i := 0; i < length-1; i++ {
		for j := 0; j < length-i-1; j++ {
			fmt.Println("i:", i, " j:", j, " First number: ", numbers[j], " Second number:", numbers[j+1])
			if numbers[j] > numbers[j+1] {
				swap(&numbers[j], &numbers[j+1])
			}
		}
	}
	return numbers
}

func swap(a *int, b *int) {
	temp := *a
	*a = *b
	*b = temp
}
