package main

import "fmt"

func main() {
	str := "   fly me   to   the moon  "
	fmt.Println(lengthOfLastWord(str))
}

func lengthOfLastWord(s string) int {
	point := 0
	length := len(s)
	for i := length - 1; i >= 0; i-- {
		if s[i] == ' ' {
			if point != 0 {
				break
			}
			continue
		} else {
			point++
		}
	}
	return point
}
