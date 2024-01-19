let number = prompt("Nhập vào một chuỗi bất kỳ:");
let a = function(b) {
    let number1 = [];
    let number2 = [];
    let number3 = [];

    // Phân loại ký tự
    for (let i = 0; i < inputStr.length; i++) {
        let char = inputStr[i];
        if (/[a-zA-Z]/.test(char)) {
            number1.push(char);
        } else if (/\d/.test(char)) {
            number2.push(char);
        } else {
            number3.push(char);
        }
    }
    return number1.concat(number2, number3);
};

let result = a(number);
console.log("Kết quả sắp xếp:", result.join(''));
