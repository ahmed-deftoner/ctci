function findMedian(arr: number[]): number {
    // Write your code here
    if (arr.length == 0) {
        return 0; // 0.
      }
      arr.sort((a, b) => a - b); // 1.
      const midpoint = Math.floor(arr.length / 2); // 2.
      const median = arr.length % 2 === 1 ?
        arr[midpoint] : // 3.1. If odd length, just take midpoint
        (arr[midpoint - 1] + arr[midpoint]) / 2; // 3.2. If even length, take median of midpoints
      return median;
}


function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    for (let i = 0; i < matrix.length; i++) {
        const x = matrix[matrix.length - 1][i];
        const y = matrix[matrix.length - 2][i];
        if (x + y > matrix[0][i] + matrix[1][i]) {
            console.log(x + " " + y);
        }
    }
    return 1;
}

findMedian([5,3,1,2,4]);
flippingMatrix([
    [112,42,114,119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
])