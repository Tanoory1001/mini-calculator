let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let add=document.querySelector("#add");
let minus=document.querySelector("#minus");
let multiply=document.querySelector("#multiply");
let divide=document.querySelector("#divide");
let display_result=document.querySelector("#display_result")

function DivideTwoNumbers(a,b){
    let quotient = a/b;
    return quotient;
};
function AddTwoNumbers ( a , b ) {
    let sum = a+b;
    return sum;
};
function SubtractTwoNumbers(a,b){
    let diff = a-b;
    return diff;
};
function MultiplyTwoNumbers(a,b){
    let product = a*b;
    return product;
};

add.addEventListener("click",function(){
    let num_1=parseInt(num1.value)
    let num_2=parseInt(num2.value)
    display_result.innerHTML = AddTwoNumbers ( num_1 , num_2 )
});
minus.addEventListener("click",function(){
    let num_3=parseInt(num1.value)
    let num_4=parseInt(num2.value)
    display_result.innerHTML = SubtractTwoNumbers ( num_3 , num_4 )
});
multiply.addEventListener("click",function(){
    let num_5=parseInt(num1.value)
    let num_6=parseInt(num2.value)
    display_result.innerHTML = MultiplyTwoNumbers ( num_5 , num_6 )
});
divide.addEventListener("click",function(){
    let num_7=parseInt(num1.value)
    let num_8=parseInt(num2.value)
    display_result.innerHTML = DivideTwoNumbers ( num_7 , num_8 )
});