package main

import "fmt"

func main() {
	var strs = []string{"flower", "flow", "flight"}
	fmt.Println(longestCommonPrefix(strs))
}

func longestCommonPrefix(strs []string) string {
	length := len(strs)
	maxPrefix := 0
	index := findMinimumLength(strs)
	var result string

	if length >= 0 && length <= 200 {
		for i := 0; i < index; i++ {
			j := 0
			var x byte
			var y byte
			for k := j + 1; k < length; k++ {
				x = strs[j][i]
				y = strs[k][i]
				if x != y {
					break
				}
			}
			if x != y {
				break
			}
			maxPrefix++
		}
	}
	if maxPrefix > 0 {
		for s := 0; s < maxPrefix; s++ {
			result += string(strs[0][s])
		}
	}

	return result
}

func findMinimumLength(strs []string) int {
	minLength := 200
	temp := 1

	for i := 0; i < len(strs); i++ {
		temp = len(strs[i])
		if temp < minLength {
			minLength = temp
		}
	}
	return minLength
}
