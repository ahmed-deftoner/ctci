/**
 * @function radixSort
 * @description radix sort works by ordering each digit based on it's position relative to an exponent e.g. base 10. It uses a stable sorting algorithm to sort digits (counting sort in this example).
 * @see [Radix Sort](https://www.javatpoint.com/radix-sort)
 * @example radixSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 * @complexity_Analysis
 * Space complexity - O(n + k)
 * Time complexity 
 *      Best case   -   O(n + k)
 *      Worst case  -   O(nk)
 *      Average case -  O(nk)
 */
function radixSort(arr: Array<number>): Array<number> {
  // get max from array
  let max: number = Math.max(...arr);

  // Apply counting sort to sort elements based on place value.
  for (let exp: number = 1; max / exp > 0; exp *= 10){
      arr = countingSort(arr, exp);
  }
  return arr;
}

function countingSort(arr: Array<number>, exponent: number): Array<number> {
  const count: Array<number> = new Array<number>(10).fill(0);
  const output: Array<number> = new Array<number>(arr.length).fill(0);

  // Count frequencies per bucket
  for (let i = 0; i < arr.length; i++) 
    count[Math.floor(((arr[i]) / exponent) % 10)]++;

  // Modify the count array such that each element at each index
  // stores the sum of previous counts.
  for (let i = 1; i < 10; i++) 
    count[i] += count[i - 1];

  // Output each object from the input sequence followed by
  // decreasing its count by 1
  for (let i = arr.length - 1; i >= 0; i--) 
    output[--count[Math.floor(((arr[i]) / exponent) % 10)]] = arr[i];

  return output;
}

let res = radixSort([1, 4, 2, 5, 9, 6, 3, 8, 10, 7]);
console.log(res);
res = radixSort([10, 9, 800, 7, 6, 5, 40, 3, 2, 1]);
console.log(res);
res = radixSort([1, 4, 2, 9, 5000, 7, 3, 8, 10, 6]);
console.log(res);