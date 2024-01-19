let number = [3, 4, 5, 6, 7, 8, 9];
let abc = function(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
};
let d = function(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (abc(arr[i], arr[j], arr[k])) {
                    count++;
                }
            }
        }
    }
    return count;
};
let count = d(number);
console.log("Số lượng hình tam giác có thể tạo ra:", count);
