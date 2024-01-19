let number=[1, 2, 3, 4, 5, 6, 7];
function a(array){
    let b = 0;
    let number2=[];
    for(let i= 0; i< array.length; i++){
        for(let j=1;j < array[i]; j++){
            if (array[i]%j===0) {
            b++;
                
            }
        }if(b===0){
            number2.push(array[i]);
        }
        check=0;
    }console.log(number2);

}
a(array);