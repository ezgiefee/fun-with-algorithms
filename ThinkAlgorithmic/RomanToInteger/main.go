package main

import "fmt"

func main() {
	fmt.Println(romanToInt("MCMXCIV"))

}

func romanToInt(s string) int {
	length := len(s)
	result := 0
	var str byte

	for i := 0; i < length; i++ {
		str = s[i]
		switch str {
		case 'M':
			result += 1000
		case 'D':
			result += 500
		case 'C':
			if (i+1 < length) && (s[i+1] == 'D') {
				result += 400
				i++
			} else if (i+1 < length) && (s[i+1] == 'M') {
				result += 900
				i++
			} else {
				result += 100
			}
		case 'L':
			result += 50
		case 'X':
			if (i+1 < length) && (s[i+1] == 'L') {
				result += 40
				i++
			} else if (i+1 < length) && (s[i+1] == 'C') {
				result += 90
				i++
			} else {
				result += 10
			}
		case 'V':
			result += 5
		case 'I':
			if (i+1 < length) && (s[i+1] == 'V') {
				result += 4
				i++
			} else if (i+1 < length) && (s[i+1] == 'X') {
				result += 9
				i++
			} else {
				result += 1
			}
		}
	}
	return result
}
