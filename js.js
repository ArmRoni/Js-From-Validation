let Username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let form = document.querySelector("#form");


function ShowError(input,message){
    const FromControl = input.parentElement;
    FromControl.className = "form-control error";
    const small = FromControl.querySelector("small");
    small.innerText = message;
}

function showSucces(input){
    const FromControl = input.parentElement;
    FromControl.className = "form-control success"
}

function  checkMail(input){
    const RexEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(RexEx.test(input.value)){
        showSucces(input);
    }else {
        ShowError(input, "Email is not valid");
    }
}

function checkInputLenght(input,min,max){
 if(input.value.length < min){
    ShowError(input,`${getFieldName(input)} You must be at list ${min} characters`);
 }
 else if(input.value.length > max ){
    ShowError(input, `${getFieldName(input)} You must be at list ${max} Characters`);
 }else {
    showSucces(input);
 }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordMathc(input1,input2){
   if(input1.value !== input2.value){
      ShowError(input2, 'password is not same');
   }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputLenght(Username,3,20);
    checkInputLenght(password,6,30);
    checkMail(email);
    checkPasswordMathc(password, password2)
})