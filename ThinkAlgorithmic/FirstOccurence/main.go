package main

import "fmt"

func main() {
	haystack := "hello"
	needle := "ll"
	fmt.Println(strStr(haystack, needle))
}

func strStr(haystack string, needle string) int {
	index := -1
	hayLength := len(haystack)
	needleLength := len(needle)

	if haystack == needle {
		return 0
	}

	for i := 0; i <= hayLength-needleLength; i++ {
		str := ""
		for j := i; j < needleLength+i; j++ {
			str += string(haystack[j])
		}
		if str == needle {
			return i
		}
	}
	return index
}
