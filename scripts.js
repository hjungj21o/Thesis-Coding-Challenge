// Password toggle
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    e.preventDefault();
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    if (type === 'text') {
        togglePassword.style.filter = "brightness(100%)"
    } else {
        togglePassword.style.filter = "brightness(250%)"
    };

});