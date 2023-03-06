function isBalanced(s: string): string {
    // Write your code here
    const arr: Array<string> = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
            arr.push(s[i]);
        } else if (s[i] == "}" || s[i] == "]" || s[i] == ")") {
            const x = arr.pop();
            if (x == "(" && s[i] != ")")  {
                console.log(s[i] + " NO " + x);
                return "NO";
            }
            if (x == "[" && s[i] != "]")  {
                console.log(s[i] + " NO " + x);
                return "NO";
            }
            if (x == "{" && s[i] != "}")  {
                return "NO";
            }
        }
    }
    if (arr.length >= 1 ) {
        return "NO";
    }
    return "YES";
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{{[[(())]]}}"));
