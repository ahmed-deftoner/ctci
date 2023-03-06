

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    const x: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < ar.length; i++) {
        x.set(ar[i], 0);
    }
    for (let j = 0; j < ar.length; j++) {
        if (x.has(ar[j])) {
            let c: number = x.get(ar[j]) as number + 1;
            x.set(ar[j], c);
        }
    }
    let count = 0;
    x.forEach((v: number) => {
        count += Math.floor(v / 2);
    });
    console.log(count);
    return 1;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
