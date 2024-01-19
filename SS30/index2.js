let n = +prompt("Nhập vào một số nguyên dương n:");
let sum = 0;
let number = function(num) {
    return num % 2 !== 0;
};
for (let i = 1; i <= n; i += 2) {
    sum += i;
    if (number(sum) && i !== n) {
        console.log(i);
    }
}

console.log("Tổng các số lẻ là:", sum);

