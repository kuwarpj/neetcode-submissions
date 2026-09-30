class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // let t = new Array()
        // for(let i = 0; i < numbers.length; i++){
        //     for(let j = i+1; j < numbers.length; j++){
        //         let sum = numbers[i] + numbers[j]

        //         if(sum === target){
        //         t.push(numbers[i] ,numbers[j])
        //         }
        //     }
        // }


        // return t


      let n = numbers.length
        let left = 0;
        let right = n - 1;


        while(left < right){
            let sum = numbers[left] + numbers[right]

            if(sum === target){
                return [left+1, right+1]
            } else if(sum > target){
                right--
            } else {
                left++
            }
        }

        return []
    }
}
