class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length - 1;
        let answer = 0;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] > nums[nums.length - 1]) {
                low = mid + 1;
                answer = low
            } else {
                high = mid
                answer = mid
            }
        }

        return nums[answer];
    }
}
