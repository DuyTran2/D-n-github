function square(num){
    
    let square= num*num;
    console.log(square);
}
square(7)
function Scircle(R){
    let Scircle = R*R*3.14;
    console.log(Scircle);
}
Scircle(10)
function Pcircle(R){
    let Pcircle = R*2*3.14;
    console.log(Pcircle);
}
Pcircle(5)
function factorial(num){
    let result = 1;
    for(i=1; i<=num;i++){
        result *=i;
    }
    console.log(result);
    }
factorial(5)
function check(para1){
    //let para1 = true;
    if(typeof(para1)==number){
        return true;
    }else if(typeof(para1)==string){
        return false;
    }
}
check(111)