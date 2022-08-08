
var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var phoneError=document.getElementById('phone-error');
var messageError=document.getElementById('click-error');
var clickError = document.getElementById('click-error');

function validateName(){
    var name=document.getElementById('cntact-name').value;
    if(name.length==0){
        nameError.innerHTML='name is required';
        return false;
   
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'write full name';
        return false;
    }
    
    nameError.innerHTML="ok";
    return true;



}
function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    if (email == 'keezhillamaromal@gmail.com') {
        emailError.innerHTML = 'Cant use this mail id';
        return false;
    }
    emailError.innerHTML = 'ok';
    return true;
}
function validatePhone() {

    var phone = document.getElementById('phone').value;
    console.log('phone');

    if (phone.length != 10) {
        phoneError.innerHTML = 'phone should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Invalid phone number';
        return false;
    }
    phoneError.innerHTML = 'ok';
    return true;

}
function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone() ) {
        clickError.style.display = 'block'
        clickError.innerHTML = 'please complete form to submit';
        setTimeout(function () { clickError.style.display = 'none'; }, 3000);
        return false;
    }
}





$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzcttz9LU73rtsMF7Z_YEKhxA9PlQ6BV5UfWL8_AqgCyAHcwClXP7biMGHvzZLhiZka/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
        },
        error: function (err) {
            alert("Something Error")
        }
    })
})

/*

$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fname:{
            required:true,
            
        },
        email:{
            required:true,
            email:true
        },
        Phone:{
            required:true,
            maxlenth:10,
            Phone:true
        }
    }

    })
})






















*/