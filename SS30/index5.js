let text = prompt("Nhập vào một chuỗi bất kỳ:");
let a = function(str) {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let b = word[word.length - 1];
            words[i] = word.slice(0, -1) + b;
        }
    }

    return words.join(" ");
};
let c = a(text);
console.log("Kết quả:", c);
