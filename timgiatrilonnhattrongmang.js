let numbers = [2,5,10,15,20,27];
let max = numbers[0];
let index = 0;
for (let i = 1, i < numbers.length; i++){
    if (number[i] > max){
        max = numbers[i];
        index = i;
    }
}
alert("số lớn nhất là" + max + "đươc tìm thấy tại vị trí" + index);