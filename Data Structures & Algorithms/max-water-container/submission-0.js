class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0;
        let right = heights.length - 1
        let sum = 0
        while(left < right){
            let total = Math.min(heights[left], heights[right]) * (right - left)
            if(sum < total){
                sum = total
            }


            if(heights[left] < heights[right]){
                left++
            } else {
                right--
            }
        }

        return sum
    }
}
