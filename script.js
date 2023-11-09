const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const errorDisplayers = document.querySelectorAll('.error');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone-number');

function emailIsValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(regex);
}

function isPhoneValid(phone) {
    return phone.match(/^[0][0-9]{9}$/);
}

password.addEventListener('keyup', (e) => {

    if(password.value.match(/\d/) && password.value.match(/[a-z]/) && password.value.match(/[A-Z]/) && password.value.length >= 8) {
        password.classList.remove('invalid');
        password.classList.add('valid');
        errorDisplayers[1].textContent = '';
    }
    else {
        password.classList.remove('valid');
        password.classList.add('invalid');
        errorDisplayers[1].textContent = "Password must contain an upper case, a lower case and a number";
    }
    if(password.value.length == 0)
        errorDisplayers[1].textContent = '';
});


passwordConfirm.addEventListener('keyup', (e) => {
    if(passwordConfirm.value !== password.value) {
        passwordConfirm.classList.add('invalid');
        passwordConfirm.classList.remove('valid');
        errorDisplayers[2].textContent = "Password do not match";
    }
    else {
        passwordConfirm.classList.remove('invalid');
        passwordConfirm.classList.add('valid');
        errorDisplayers[2].textContent = '';
    }
    if(passwordConfirm.value.length == 0)
        errorDisplayers[2].textContent = '';
});

firstName.addEventListener('keyup', () => {
    if(firstName.value.length > 0) {
        firstName.classList.remove('invalid');
        firstName.classList.add('valid');
    }
    else {
        firstName.classList.remove('valid');
        firstName.classList.add('invalid');
    }
});

lastName.addEventListener('keyup', () => {
    if(lastName.value.length > 0) {
        lastName.classList.remove('invalid');
        lastName.classList.add('valid');
    }
    else {
        lastName.classList.remove('valid');
        lastName.classList.add('invalid');
    }
});

email.addEventListener('keyup', () => {
    if(emailIsValid(email.value)) {
        email.classList.remove('invalid');
        email.classList.add('valid');
        errorDisplayers[0].textContent = '';
    }
    else {
        email.classList.remove('valid');
        email.classList.add('invalid');
        errorDisplayers[0].textContent = "Enter a valid email";
    }
});

phone.addEventListener('keyup', () => {
    if(isPhoneValid(phone.value)) {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
    }
    else {
        phone.classList.remove('valid');
        phone.classList.add('invalid');
    }
    console.log(phone.classList)
})