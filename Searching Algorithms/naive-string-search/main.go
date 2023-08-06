package main

import "fmt"

func main() {
	long := "lorem lorim"
	short := "lor"
	result := naiveSearch(long, short)
	fmt.Println(result)
}

func naiveSearch(long string, short string) int {
	count := 0
	for i := 0; i < len(long); i++ {
		for j := 0; j < len(short); j++ {
			if string(long[i+j]) != string(short[j]) {
				break
			}
			if j == len(short)-1 {
				count++
			}
		}
	}
	return count
}
