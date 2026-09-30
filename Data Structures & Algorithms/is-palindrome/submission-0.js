class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');    
        let right = cleaned.length - 1

        while(left < right){
            if(cleaned[left] == cleaned[right]){
                left++
                right--
            } else {
                return false
            }
        }

        return true
    }
}
