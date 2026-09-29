class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let mapSet = new Set(nums)

        let count = 1;
        let maxCount = 0;

        for(let i = 0 ; i < nums.length; i++){
            if(!mapSet.has(nums[i] - 1)){
              let   counter = nums[i]
                count = 1


                while(mapSet.has(counter+1)){
                    counter++
                    count++
                }

                maxCount = Math.max(maxCount, count)
            }
        }

        return maxCount
    }
}
