class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let num = nums.sort((a,b)=> a-b)
         let arr = []
        for(let i = 0; i < num.length; i++){
            if(i > 0 && num[i] === num[i-1]) continue 
            let fixed = num[i]
            let j = i+1
            let k = num.length - 1

            while( j < k){
                let sum = fixed + num[j] + num[k]
                if(sum === 0){
                    arr.push([fixed, num[j], num[k]])
                     while(j < k && num[j] === num[j+1]) j++
                     while(j < k && num[k] === num[k-1]) k--
                     j++
                     k--

                } else if(sum <  0){
                    j++
                } else {
                    k--
                }
            }
        }

        return arr
    }
}
