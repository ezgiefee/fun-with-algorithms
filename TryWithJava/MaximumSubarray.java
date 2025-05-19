package TryWithJava;

/*
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */
public class MaximumSubarray {
  public static void main(String[] args) {
    int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    System.out.println("Max subarray sum: " + maxSubArrayKadane(nums));
    System.out.println("Max subarray sum: " + maxSubArray(nums)); 
  }
  
  public static int maxSubArrayKadane(int[] nums) {
    int currentSum = nums[0];
    int maxSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }

  public static int maxSubArray(int[] nums) {
        return divideAndConquer(nums, 0, nums.length - 1);
    }

    private static int divideAndConquer(int[] nums, int left, int right) {
        if (left == right) {
            return nums[left];
        }

        int mid = (left + right) / 2;

        int leftMax = divideAndConquer(nums, left, mid);
        int rightMax = divideAndConquer(nums, mid + 1, right);
        int crossMax = maxCrossingSum(nums, left, mid, right);

        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }

    private static int maxCrossingSum(int[] nums, int left, int mid, int right) {
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }

        int rightSum = Integer.MIN_VALUE;
        sum = 0;
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }

        return leftSum + rightSum;
    }

}
