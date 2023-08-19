package main

import (
	"fmt"
)

func main() {
	arr := [] int {10,24,76,73,9,74,8}
	result := mergeSort(arr)
	fmt.Println(result)
}

func mergeSort(arr []int) []int{
	length := len(arr)

	if length <= 1{
		return arr
	}

	mid := length/2
	left := mergeSort(arr[0:mid])
	right := mergeSort(arr[mid:length])
	return merge(left,right)
}

func merge(arr1,arr2 []int) []int{
	results := []int{}
	i := 0
	j := 0
	for i<len(arr1) && j<len(arr2){
		if arr2[j]>arr1[i]{
			results = append(results, arr1[i])
			i++
		} else {
			results = append(results, arr2[j])
			j++
		}
	}
	for i<len(arr1){
		results = append(results, arr1[i])
		i++
	}
	for j<len(arr2){
		results = append(results, arr2[j])
		j++
	}
	return results
}
