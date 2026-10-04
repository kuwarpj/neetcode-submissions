class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
          if (!this.keyStore.has(key)) {
        this.keyStore.set(key, []);   // pehli baar, khaali array banao
    }
    this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        let entries = this.keyStore.get(key)
        if (!entries) return "";
        let low = 0; 
        let high = entries.length - 1

        let answer = ""

        while(low <= high){

            let mid = Math.floor((low+high)/2)

            if(entries[mid][0] <= timestamp){
                answer = entries[mid][1]
                low = mid + 1

            } else {
                high = mid - 1
            }
            
        }


        return answer
    }
}
