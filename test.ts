function plusMinus(arr: number[]): void {
    // Write your code here
    let pos: number = 0;
    let neg: number = 0;
    let zero: number = 0;
    arr.map((x: number) => {
        if (x > 0) {
            pos++;
        }else if (x == 0) {
            zero++;
        }else {
            neg++;
        }
    });
    console.log((pos/arr.length).toFixed(5));
    console.log((neg/arr.length).toFixed(5));
    console.log((zero/arr.length).toFixed(5));
}

function miniMaxSum(arr: number[]): void {
    arr.sort();
    let min = 0;
    let max = 0;
    for (let index = 0; index < 4; index++) 
        min += arr[index];
    for (let index = arr.length - 1; index >= arr.length - 4; index--) 
        max += arr[index];
    console.log(min + " " + max);
}


function timeConversion(s: string): string {
    // Write your code here
    let output: string = "";
    if (s.substring(s.length - 2) == "AM" && s.startsWith("12")) {
        output = output.concat("00").concat(s.substring(2, s.length - 2));
    } else if (s.substring(s.length - 2) == "PM") {
        if (s.startsWith("12")) {
            output = output.concat(s.substring(0, s.length - 2));
        } else {
            output = output.concat((parseInt(s.substring(0, 2)) + 12).toString())
             .concat(s.substring(2, s.length - 2));
        }
    } else {
        output = output.concat(s.substring(0, s.length - 2));
    }
    return output;
}

function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here
    let count: Array<number> = new Array<number>(queries.length).fill(0);
    strings.map((x: string) => {
        queries.forEach((val: string, idx: number) => {
            if (x == val) {
                count[idx]++;
            }
        })
    });
    return count;
}

function lonelyinteger(a: number[]): number {
    // Write your code here
    let n: number = -1;
    let s: Set<number>;
    a.sort();
    for (let index = 0; index < a.length; index++) {
       let found = true;
       for (let j = index + 1; j < a.length; j++) {
            if (a[j] == a[index]) {
                found = false;
                console.log(a[j]);
                break;   
            }
       }
       if (found == true) {
            n = a[index];
            console.log(n);
            break;
       }
     }
    console.log(a);
    console.log(n);
    return n;
}

//plusMinus([-4, 3, -9, 0, 4, 1]);
//miniMaxSum([1, 2, 3, 4, 5]);
//timeConversion("12:45:54PM")
//matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]);
lonelyinteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31]);