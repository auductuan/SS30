let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10) + 1);
}
console.log("Mảng đã khai báo:", randomArray);
let a = true;
for (let i = 0; i < Math.floor(randomArray.length / 2); i++) {
    if (randomArray[i] !== randomArray[randomArray.length - 1 - i]) {
        a = false;
        break;
    }
}
if (a) {
    console.log("Mảng là đối xứng.");
} else {
    console.log("Mảng không đối xứng.");
}

