class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let result = [];

        for (let i = 0; i < temp.length; i++) {
            result.push(0);
        }
        let st = [];

        for (let i = 0; i < temp.length; i++) {
            while (st.length != 0 && temp[i] > temp[st[st.length - 1]]) {
                let top = st.pop();
                result[top] = i - top;
            }

            st.push(i);
        }

        return result;
    }
}
