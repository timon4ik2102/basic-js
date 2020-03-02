module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                depth = Math.max(depth,1 + this.calculateDepth(arr[i]))
            }
        }
        return depth
    }
};