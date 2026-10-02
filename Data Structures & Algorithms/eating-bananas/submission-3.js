class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let answer = high;

        while(low<=high){
            let mid = Math.floor((low+high)/2)
            let total  = 0
            for(let i = 0; i<piles.length; i++){
                total += Math.ceil((piles[i]/mid))

            }

            if(total <= h){
                answer = mid
                high = mid - 1
            } else{
                low = mid+1
            }
        }

        return answer

    }
}
